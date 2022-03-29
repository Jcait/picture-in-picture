const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Async prompt to select media stream, pass to video element then play

async function selectMediaStream() {
    try { 
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        console.log("SlectMediaStream broke", error)
    }
}

button.addEventListener('click', async () => {
    // disable button when clicked
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

selectMediaStream()