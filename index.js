const audio = document.querySelector('audio')
const btnBlock = document.querySelector('.nav-list')
const birdButtons = document.querySelectorAll('[data-item]')
let isPlay = false;
const main = document.querySelector('.main');
const playBtn = document.querySelector('.main-btn');
audio.volume=0.5;

playBtn.addEventListener('click', e =>{
    if(isPlay === true){
        playBtn.classList.remove('main-btn_pause')
        isPlay = false;
        audio.pause();
    }else{
        playBtn.classList.add('main-btn_pause')
        isPlay = true;
        audio.play();
    }
});

audio.addEventListener('loadedmetadata', (e) => {
});

function changeBgPhoto(num){
    main.style.backgroundImage = `url('./assets/main/${num}.jpg')`
}
function changeAudio(num){
    if(isPlay){
        audio.src = `./assets/audio/${num}.mp3`
        audio.play();
    }
}

function changeColor(){
    btnBlock.addEventListener('click',e=>{
        birdButtons.forEach(elem => {
            elem.classList.remove('nav-item_active');
            e.target.classList.add('nav-item_active')
        })
    
    });
}


birdButtons.forEach(btn => {
    btn.addEventListener('click',e=>{
        const num = e.target.dataset.item;
        changeAudio(num)
        changeBgPhoto(num)
        changeColor()
    });
});
