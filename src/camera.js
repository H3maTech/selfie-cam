async function gettingVideo() {
  const avStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  const video = document.createElement("video");
  video.srcObject = avStream;
  await video.play();
  return video;
}

export const wait = (amount = 0) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function getVideo() {
  console.log("Access your camera 📸");
  wait(100);
  console.log("Getting the video..");
  return "The Video is ready 📺";
}

export function drawVideo(video, canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}
