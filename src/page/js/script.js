let scrollRight = document.querySelector("#scroll-right");
let scrollLeft = document.querySelector("#scroll-left");
let PopSong = document.querySelector(".pop-song");

scrollRight.addEventListener("click", () => {
  PopSong.scrollLeft += 1230; // Scroll right
});
scrollLeft.addEventListener("click", () => {
  PopSong.scrollLeft -= 1230; // Scroll left
});

let leftScroll = document.querySelector("#left-scroll");
let rightScroll = document.querySelector("#right-scroll");
let ListSong = document.querySelector(".List-song");

rightScroll.addEventListener("click", () => {
  ListSong.scrollLeft += 1230; // Scroll right
});

leftScroll.addEventListener("click", () => {
  ListSong.scrollLeft -= 1230; // Scroll left
});

let ListAll = document.querySelector(".List-all");
let leftScrolls = document.querySelector("#left-scrolls");
let rightScrolls = document.querySelector("#right-scrolls");
rightScrolls.addEventListener("click", () => {
  ListAll.scrollLeft += 1230; // Scroll right
});

leftScrolls.addEventListener("click", () => {
  ListAll.scrollLeft -= 1230; // Scroll left
});
