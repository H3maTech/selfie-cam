import "./style.css";
import { getVideo, drawVideo } from "./src/camera.js";

const canvas = document.querySelector("canvas");
const button = document.querySelector("#camera");

let video;
(async () => (video = await getVideo()))();

button.addEventListener("click", () => {
  drawVideo(video, canvas);
});
