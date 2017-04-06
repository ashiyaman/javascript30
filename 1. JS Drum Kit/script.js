
/****** Method to get the keyCode for keydown keys event *******/
window.addEventListener('keydown', function(event){
    
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const divi = document.querySelector(`div[data-key='${event.keyCode}']`);
    
    if(!audio)  return;
     else{   
    audio.currentTime = 0;
    audio.play();
    divi.classList.add('playing');
     }
});


/*******Function to be triggered when audio is played **********/
function removeTransition(event){
    
    if (event.propertyName !== 'transform') return;
    
    console.log(event.propertyName);
    
    this.classList.remove('playing');
}


/********* Collect all keys from key class ********/
const keys = document.querySelectorAll('.key');

keys.forEach(key =>  key.addEventListener('transitionend', removeTransition));    
    