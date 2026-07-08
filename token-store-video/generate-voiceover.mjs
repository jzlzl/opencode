import { writeFile } from 'fs/promises';
import { join } from 'path';

// 创建一个简单的WAV文件
function createWAV(durationSeconds) {
  const sampleRate = 44100;
  const numChannels = 1;
  const bitsPerSample = 16;
  const bytesPerSample = bitsPerSample / 8;
  const dataSize = durationSeconds * sampleRate * numChannels * bytesPerSample;
  
  // WAV文件头
  const wavHeader = Buffer.alloc(44);
  
  // RIFF chunk descriptor
  wavHeader.write('RIFF', 0);
  wavHeader.writeUInt32LE(36 + dataSize, 4);
  wavHeader.write('WAVE', 8);
  
  // fmt sub-chunk
  wavHeader.write('fmt ', 12);
  wavHeader.writeUInt32LE(16, 16);
  wavHeader.writeUInt16LE(1, 20);
  wavHeader.writeUInt16LE(numChannels, 22);
  wavHeader.writeUInt32LE(sampleRate, 24);
  wavHeader.writeUInt32LE(sampleRate * numChannels * bytesPerSample, 28);
  wavHeader.writeUInt16LE(numChannels * bytesPerSample, 32);
  wavHeader.writeUInt16LE(bitsPerSample, 34);
  
  // data sub-chunk
  wavHeader.write('data', 36);
  wavHeader.writeUInt32LE(dataSize, 40);
  
  // 创建静音音频数据
  const audioData = Buffer.alloc(dataSize);
  
  return Buffer.concat([wavHeader, audioData]);
}

const VOICEOVER_DURATIONS = {
  intro: 3,
  problem: 4,
  solution: 4,
  features: 5,
  pricing: 4,
  metrics: 4,
  cta: 4
};

async function generateVoiceover() {
  console.log('Generating placeholder audio files...');
  
  for (const [scene, duration] of Object.entries(VOICEOVER_DURATIONS)) {
    try {
      const audioData = createWAV(duration);
      const outputPath = join(process.cwd(), 'public', 'voiceover', `${scene}.wav`);
      await writeFile(outputPath, audioData);
      console.log(`✓ Generated ${scene}.wav (${duration}s)`);
    } catch (error) {
      console.error(`✗ Error generating ${scene}.wav:`, error.message);
    }
  }
  
  console.log('Placeholder audio files generation complete!');
}

generateVoiceover();