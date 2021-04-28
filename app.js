let playBtn = document.querySelector('.btn');
let previous = document.querySelector('.fa-backward');
let next = document.querySelector('.fa-forward');
let audio = document.createElement('audio');

let timer = 0;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let tousLesSons =[
    {
        name:"ninho",
        son:"/musique/ninho.mp3"
    },
    {
        name:"ks bloom" ,
        son:"/musique/ks-bloom.mp3"
    },

];



playBtn.addEventListener('click',()=>{
    if(timer == 0){
        timer =1;
        audio.play();
        playBtn.innerHTML='<i class="fa fa-pause"></i>';
    }else{
        timer=0;
        audio.pause()
        playBtn.innerHTML='<i class="fa fa-play"></i>'
    }
});

previous.addEventListener('click', ()=>{
    
    ;
    audio.play();
});

next.addEventListener('click', ()=>{
    audio.src=tousLesSons[index_no +1].son;
    audio.play();
});





class Sound {
    constructor(player){
        this.player=player;
        this.wrapper=document.querySelector('.main')
    }

    init(){
        this.wrapper.style.width = 100 + '%';
        this.wrapper.style.height = 100 + '%';
        let titre = document.createElement("h1");
        let titre1 = document.createElement("h1");
        let div1 = document.createElement("div");
        let p = document.createElement("div");
        let div2 = document.createElement("div");
        let input = document.createElement("input");
        let imag =document.createElement('div')

        titre.textContent='Music';
        titre1.textContent='Play list';
        p.textContent='+';


        div1.style.width=300+'px';
        div1.style.height=100+'px';

        div1.append(titre1,p);
        
        document.body.prepend(titre);
        document.body.prepend(titre1);
        document.body.prepend(div2);
        document.body.prepend(input);
        document.body.prepend(p);
        document.body.prepend(imag);

        titre.classList.add('titre');
        titre1.classList.add('titre1');
        div2.classList.add('image');
        input.classList.add('input');
        p.classList.add('p');
        imag.classList.add('image1');

        div1.style.zIndex=1000;

    }
    onload(){
        let audio= document.createElement('audio')
        audio.src=tousLesSons[index_no].son;
        audio.load();
    }
    justPlay(){
        if(playing_song == false){
            play();
        }else{
            pause();
        };
    };

    play() {
        audio.style.display = "none";
        audio.src = tousLesSons[index_no].son;
        playBtn.innerHTML='<i class="fa fa-pause"></i>';
        this.remove()
    };

    pause() {
        let audio= document.createElement('audio')
        audio.pause();
        playing_song= false;
        playBtn.innerHTML='<i class="fa fa-play"></i>'
    };
    remove(){
        playBtn.innerHTML='<i class="fa fa-pause"></i>'
    }


    volumechange() {

    };

    duration() {

    };


}
let player = new Sound();
player.init();
player.play();
player.pause();
