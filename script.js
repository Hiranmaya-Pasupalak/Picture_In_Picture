const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//Prompt to select media stream , pass to video element and play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){
        console.log('Oops, Error occured',error);
    }
}

button.addEventListener('click', async () => {
    // Display Button
    button.disabled = true;
    // Start Picture In Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

//On load
selectMediaStream();