import { Composition, CalculateMetadataFunction } from "remotion";
import { TokenFlowVideo } from "./TokenFlowVideo";
import { TokenFlowVideoZh } from "./TokenFlowVideoZh";
import { getAudioDuration } from "@remotion/media-utils";
import { staticFile } from "remotion";

type TokenFlowVideoProps = {
  sceneDurations?: number[];
};

const FPS = 30;

const EN_SCENE_AUDIO_FILES = [
  "voiceover/intro.wav",
  "voiceover/problem.wav", 
  "voiceover/solution.wav",
  "voiceover/features.wav",
  "voiceover/pricing.wav",
  "voiceover/metrics.wav",
  "voiceover/cta.wav"
];

const ZH_SCENE_AUDIO_FILES = [
  "voiceover-zh/intro.wav",
  "voiceover-zh/problem.wav", 
  "voiceover-zh/solution.wav",
  "voiceover-zh/features.wav",
  "voiceover-zh/pricing.wav",
  "voiceover-zh/metrics.wav",
  "voiceover-zh/cta.wav"
];

const createMetadataCalculator = (
  audioFiles: string[],
): CalculateMetadataFunction<TokenFlowVideoProps> => async () => {
  try {
    const durations = await Promise.all(
      audioFiles.map((file) => getAudioDuration(staticFile(file)))
    );
    
    const paddedDurations = durations.map((duration) => duration + 0.5);
    const totalDuration = paddedDurations.reduce((sum, d) => sum + d, 0);
    const durationInFrames = Math.ceil(totalDuration * FPS);
    
    console.log('Audio durations (seconds):', durations);
    console.log(`Total duration: ${totalDuration.toFixed(2)}s (${durationInFrames} frames)`);
    
    return {
      durationInFrames,
      fps: FPS,
      width: 1920,
      height: 1080,
      props: {
        sceneDurations: paddedDurations.map(d => Math.ceil(d * FPS))
      }
    };
  } catch (error) {
    console.error('Error calculating metadata:', error);
    return {
      durationInFrames: 28 * FPS,
      fps: FPS,
      width: 1920,
      height: 1080,
      props: {}
    };
  }
};

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="TokenFlowIntro"
        component={TokenFlowVideo}
        fps={FPS}
        width={1920}
        height={1080}
        calculateMetadata={createMetadataCalculator(EN_SCENE_AUDIO_FILES)}
      />
      <Composition
        id="TokenFlowIntroZh"
        component={TokenFlowVideoZh}
        fps={FPS}
        width={1920}
        height={1080}
        calculateMetadata={createMetadataCalculator(ZH_SCENE_AUDIO_FILES)}
      />
    </>
  );
};

