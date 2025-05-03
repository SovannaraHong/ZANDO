const header = document.querySelector("#header");
const searchbar = document.querySelector("#search-bar");
const searchtrigger = document.querySelector("#search-trigger");
const searchNav = document.querySelector("#navSearch");

function toggelSearch(isShow) {
  if (isShow) {
    header.classList.add("hidden");
    searchbar.classList.add("active");
  }
}
searchtrigger.addEventListener("click", () => toggelSearch(true));
searchNav.addEventListener("click", () => toggelSearch(true));

document.addEventListener("click", function (event) {
  if (!searchbar.contains(event.target) && !header.contains(event.target)) {
    header.classList.remove("hidden");
    searchbar.classList.remove("active");
  }
});
