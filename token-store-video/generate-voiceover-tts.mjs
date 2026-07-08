import { writeFile } from 'fs/promises';
import { join } from 'path';

// 创建一个简单的MP3文件（包含一些音频数据）
function createMP3WithSound(durationSeconds) {
  const sampleRate = 44100;
  const numChannels = 1;
  const bitsPerSample = 16;
  const bytesPerSample = bitsPerSample / 8;
  const dataSize = durationSeconds * sampleRate * numChannels * bytesPerSample;
  
  // 创建一个简单的音频波形（正弦波）
  const pcmData = Buffer.alloc(dataSize);
  for (let i = 0; i < dataSize / 2; i++) {
    const sample = Math.sin(2 * Math.PI * 440 * (i / sampleRate)) * 0.1; // 440Hz A note, low volume
    pcmData.writeInt16LE(Math.floor(sample * 32767), i * 2);
  }
  
  // 简化的MP3头部
  const mp3Header = Buffer.from([
    0xFF, 0xFB, 0x90, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
  ]);
  
  return Buffer.concat([mp3Header, pcmData]);
}

const VOICEOVER_SCRIPTS = {
  intro: "Introducing TokenFlow - the unified API for all AI models.",
  problem: "Managing multiple AI APIs is costly, complex, and time-consuming.",
  solution: "TokenFlow changes everything. Access all AI models through one API.",
  features: "Real-time analytics, enterprise security, lightning fast response times.",
  pricing: "Three flexible plans from $29 to Enterprise.",
  metrics: "99.99% uptime, sub-50ms response times, 500+ enterprise clients.",
  cta: "Start free today with 10,000 tokens. TokenFlow - build faster, scale better."
};

async function generateVoiceover() {
  console.log('Generating audio files with simple waveforms...');
  
  for (const [scene, text] of Object.entries(VOICEOVER_SCRIPTS)) {
    try {
      // 根据文本长度估算音频时长
      const duration = Math.max(3, Math.ceil(text.split(' ').length / 3)); // 约3字每秒
      
      const audioData = createMP3WithSound(duration);
      const outputPath = join(process.cwd(), 'public', 'voiceover', `${scene}.mp3`);
      await writeFile(outputPath, audioData);
      console.log(`✓ Generated ${scene}.mp3 (${duration}s, text: "${text.substring(0, 20)}...")`);
    } catch (error) {
      console.error(`✗ Error generating ${scene}.mp3:`, error.message);
    }
  }
  
  console.log('Audio generation complete!');
  console.log('Note: These contain simple waveforms. For professional voiceover, consider:');
  console.log('1. Using a text-to-speech service like ElevenLabs');
  console.log('2. Hiring a professional voice actor');
  console.log('3. Recording your own voiceover');
}

generateVoiceover();