let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let artist = document.querySelector('#artist');
let total = document.querySelector('#total');
let present = document.querySelector('#present');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_duration = document.querySelector('#track_duration');
let auto_play = document.querySelector('#auto');



let timer = 0;
let autoplay = 0;

let index_no = 0;
let playing_song = false;


let track = document.createElement('audio')


let All_song = [{
    name: "fi"
}]




function volumechange() {

};

function changeDuration() {

};

function playPrevious() {

};

function justPlay() {

};

function playNext() {

};

function muteSound() {

}

const url = " https://musicbrainz.org/ws/2/"

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))