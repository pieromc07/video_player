/** @format */
import { data } from "./data.js";

window.onload = function () {
	const playlist = document.getElementById("playlist");

	data.forEach(function (item) {
		const listItem = document.createElement("li");
		listItem.innerHTML = `
        <img src="${item.poster}" alt="${item.title}">
        <div class="item_description">
            <h3 class="item_title">${item.title}</h3>
            <p class=" far fa-clock item_time"> <span>${item.duration}</span> </p>
        </div>
        `;
        listItem.classList.add("playlist_item");
		playlist.appendChild(listItem);
	});
};
