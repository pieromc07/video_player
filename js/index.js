/** @format */
import { data } from "./data.js";

window.onload = function () {
    const playlist = document.getElementById("playlist");
    const vidoplay = document.getElementById("video-container");
    data.forEach(function (item, index) {
        playlist.innerHTML += `
        <li class="playlist_item" id="${index}" onclick="playvideo(${index});">
            <p style="display: none;" >${item.url}</p>
            <img src="${item.poster}" alt="${item.title}">
            <div class="item_description">
                <h3 class="item_title">${item.title}</h3>
                <p class=" far fa-clock item_time"> <span>${item.duration}</span> </p>
            </div>
        </li>
        `;
    });

    vidoplay.innerHTML = `<video id="video" class="video" controls muted src="${data[0].url}"></video>`;
}

