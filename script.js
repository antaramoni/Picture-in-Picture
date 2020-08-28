const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element , then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error here
    console.log("Ooops! error here!", error);
  }
}

button.addEventListener("click", async () => {
  // Disable the button when click on it
  button.disable = true;

  // start Picture in Picture
  await videoElement.requestPictureInPicture();

  // Reset the button
  button.disable = false;
});

//On load
selectMediaStream();
