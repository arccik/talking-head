const handleSpeaking = async (text) => {
  const data = await fetch(`/api/text-to-speech?text=${text}`);
  const arrayBuffer = await data.arrayBuffer();
  const ctx = new AudioContext();
  const audio = await ctx.decodeAudioData(arrayBuffer);

  console.log("This will be spoken", audio);
  if (audio) playback(audio, ctx);
};
function playback(audio, ctx) {
  const playSound = ctx.createBufferSource();
  playSound.buffer = audio;
  playSound.connect(ctx.destination);
  playSound.start(ctx.currentTime);
}

export default handleSpeaking;
