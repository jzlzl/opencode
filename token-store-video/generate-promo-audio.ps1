$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Speech

$voiceoverDir = Join-Path $PSScriptRoot "public\voiceover"
$musicDir = Join-Path $PSScriptRoot "public\music"
New-Item -ItemType Directory -Force -Path $voiceoverDir, $musicDir | Out-Null

$scenes = @(
  @{ Name = "intro"; Text = "Meet TokenFlow. One API for every AI model." },
  @{ Name = "problem"; Text = "No more vendor sprawl, key chaos, or hidden token costs." },
  @{ Name = "solution"; Text = "Route GPT four, Claude, Gemini, Llama, and more through one endpoint." },
  @{ Name = "features"; Text = "Real time analytics, enterprise security, and sub fifty millisecond global routing." },
  @{ Name = "pricing"; Text = "Start at twenty nine dollars, scale to Professional, or go Enterprise." },
  @{ Name = "metrics"; Text = "Built for serious traffic: ten million daily requests, five hundred clients, and ninety nine point ninety nine percent uptime." },
  @{ Name = "cta"; Text = "Claim ten thousand free tokens. TokenFlow: build faster, scale better." }
)

$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try {
  $synth.SelectVoiceByHints([System.Speech.Synthesis.VoiceGender]::Male, [System.Speech.Synthesis.VoiceAge]::Adult, 0, [System.Globalization.CultureInfo]::GetCultureInfo("en-US"))
} catch {
  Write-Host "Using default voice: $($synth.Voice.Name)"
}
$synth.Rate = 5
$synth.Volume = 100

foreach ($scene in $scenes) {
  $path = Join-Path $voiceoverDir "$($scene.Name).wav"
  $synth.SetOutputToWaveFile($path)
  $synth.Speak($scene.Text)
  $synth.SetOutputToNull()
  Write-Host "Generated $path"
}

$synth.Dispose()

$musicPath = Join-Path $musicDir "promo-bed.wav"
$sampleRate = 44100
$seconds = 48
$samples = $sampleRate * $seconds
$dataBytes = $samples * 2

$fs = [System.IO.File]::Create($musicPath)
$bw = New-Object System.IO.BinaryWriter($fs)

$bw.Write([Text.Encoding]::ASCII.GetBytes("RIFF"))
$bw.Write([UInt32](36 + $dataBytes))
$bw.Write([Text.Encoding]::ASCII.GetBytes("WAVE"))
$bw.Write([Text.Encoding]::ASCII.GetBytes("fmt "))
$bw.Write([UInt32]16)
$bw.Write([UInt16]1)
$bw.Write([UInt16]1)
$bw.Write([UInt32]$sampleRate)
$bw.Write([UInt32]($sampleRate * 2))
$bw.Write([UInt16]2)
$bw.Write([UInt16]16)
$bw.Write([Text.Encoding]::ASCII.GetBytes("data"))
$bw.Write([UInt32]$dataBytes)

for ($i = 0; $i -lt $samples; $i++) {
  $t = $i / $sampleRate
  $beat = [Math]::Pow([Math]::Max(0, 1 - (($t * 2.4) % 1) * 5), 2)
  $pad = [Math]::Sin(2 * [Math]::PI * 110 * $t) * 0.2 + [Math]::Sin(2 * [Math]::PI * 220 * $t) * 0.12
  $pulse = [Math]::Sin(2 * [Math]::PI * 55 * $t) * 0.5 * $beat
  $spark = [Math]::Sin(2 * [Math]::PI * 880 * $t) * 0.05 * [Math]::Pow([Math]::Max(0, 1 - (($t * 4.8) % 1) * 8), 2)
  $sample = ($pad + $pulse + $spark) * 0.32
  $sample = [Math]::Max(-1, [Math]::Min(1, $sample))
  $bw.Write([Int16]($sample * 32767))
}

$bw.Dispose()
$fs.Dispose()
Write-Host "Generated $musicPath"

