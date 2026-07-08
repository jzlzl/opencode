$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Speech

$voiceoverDir = Join-Path $PSScriptRoot "public\voiceover-zh"
New-Item -ItemType Directory -Force -Path $voiceoverDir | Out-Null

$scenes = @(
  @{ Name = "intro"; Text = "TokenFlow，一个 API，接入所有 AI 模型。" },
  @{ Name = "problem"; Text = "告别多供应商切换、密钥混乱和 Token 成本不透明。" },
  @{ Name = "solution"; Text = "GPT 四、Claude、Gemini、Llama，统一走一个稳定入口。" },
  @{ Name = "features"; Text = "实时分析、企业级安全、全球路由，响应低于五十毫秒。" },
  @{ Name = "pricing"; Text = "二十九美元起步，专业版进阶，企业版无限扩展。" },
  @{ Name = "metrics"; Text = "千万日请求、五百家企业客户，百分之九十九点九九可用。" },
  @{ Name = "cta"; Text = "领取一万免费 tokens。用 TokenFlow，更快构建，从容扩展。" }
)

$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try {
  $synth.SelectVoiceByHints([System.Speech.Synthesis.VoiceGender]::Female, [System.Speech.Synthesis.VoiceAge]::Adult, 0, [System.Globalization.CultureInfo]::GetCultureInfo("zh-CN"))
} catch {
  Write-Host "Using default voice: $($synth.Voice.Name)"
}
$synth.Rate = 3
$synth.Volume = 90

foreach ($scene in $scenes) {
  $path = Join-Path $voiceoverDir "$($scene.Name).wav"
  $synth.SetOutputToWaveFile($path)
  $synth.Speak($scene.Text)
  $synth.SetOutputToNull()
  Write-Host "Generated $path"
}

$synth.Dispose()
