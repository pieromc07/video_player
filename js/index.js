/** @format */
// import { data } from "./data.js";
window.addEventListener("load", () => {
    const data = [
        {
            url: './videos/lofi.mp4',
            title: 'Lofi - Leonidas Esteban',
            poster: './images/poster.jpg',
            duration: '3:30',
        },
        {
            url: './videos/Naruto-Centuries.mp4',
            title: 'Itachi recopilacion - Centuries',
            poster: './images/Itachi.png',
            duration: '3:45',
        },
        {
            url: './videos/Opening_5.mp4',
            title: 'Naruto Shippuden Opening 5',
            poster: './images/Opening_5.png',
            duration: '1:43',
        },
        {
            url: './videos/Opening_6.mp4',
            title: 'Naruto Shippuden Opening 6',
            poster: './images/Opening_6.png',
            duration: '1:43',
        },
        {
            url: './videos/Naruto_Vs_Pain-Sucker Believer.mp4',
            title: 'Naruto Vs Pain - Sucker Believer',
            poster: './images/naruto_vs_pain.png',
            duration: '6:44',
        }
    ];
    const playlist = document.getElementById("playlist");
    data.forEach(function (item, index) {
        playlist.innerHTML += `
        <li class="playlist_item" id="${index}" onclick="playvideo(${index});">
            <p style="display: none;" >${item.url}</p>
            <p style="display: none;" >${item.poster}</p>
            <p style="display: none;" >${item.duration}</p>
            <p style="display: none;" >${item.title}</p>
            <img src="${item.poster}" alt="${item.title}">
            <div class="item_description">
                <h3 class="item_title">${item.title}</h3>
                <p class=" far fa-clock item_time"> <span>${item.duration}</span> </p>
            </div>
        </li>
        `;
    });

    
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");
    const backward = document.getElementById("backward");
    const forward = document.getElementById("forward");
    const progress = document.getElementById("progress");
    const video = document.getElementById("video-play");
    const video_title = document.getElementById("video-title");

    video.src = data[0].url;
    video.poster = data[0].poster;
    video.duration = data[0].duration;
    video.title = data[0].title;
    video_title.textContent = data[0].title;

    video.addEventListener('loadedmetadata', () => {
        progress.max = video.duration;
    });


    video.addEventListener("timeupdate", () => {
        progress.value = video.currentTime;
    });

    progress.addEventListener('input', () => {
        video.currentTime = progress.value;
    });

    play.addEventListener("click", () => {
        video.play();
        play.classList.toggle("hidden");
        pause.classList.toggle("hidden");
    });
    pause.addEventListener("click", () => {
        video.pause();
        play.classList.toggle("hidden");
        pause.classList.toggle("hidden");
    });
    backward.addEventListener("click", () => {
        video.currentTime -= 10;
    });
    forward.addEventListener("click", () => {
        video.currentTime += 10;
    });


});

function playvideo(index) {
    const video_item = document.getElementById(index);
    const video_title = document.getElementById("video-title");
    const url = video_item.children[0].textContent;
    const poster = video_item.children[1].textContent;
    const duration = video_item.children[2].textContent;
    const title = video_item.children[3].textContent;
    const progress = document.getElementById("progress");

    const video = document.getElementById("video-play");

    video.src = url;
    video.poster = poster;
    video.duration = duration;
    video.title = title;
    video_title.textContent = title;
    video.addEventListener('loadedmetadata', () => {
        progress.max = video.duration;
    });
}