const bgDiv = document.getElementById("logo-bg");
const bgImages = [
  "/src/assets/img/bg-hero.png",
  "/src/assets/img/1.jpg",
  "/src/assets/img/2.jpg",
  "/src/assets/img/3.jpg",
];

let current = 0;

setInterval(() => {
  current = (current + 1) % bgImages.length;
  bgDiv.style.backgroundImage = `url('${bgImages[current]}')`;
}, 5000); // 5000ms = 5 seconds

const product = [
  {
    img: "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/Update%20May/Replace/casual-wo.jpg",
  },
  {
    img: "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/Update%20May/Replace/sportlife-women.jpg",
  },
  {
    img: "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/Update%20May/Replace/casual-women.jpg",
  },
  {
    img: "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/Update%20May/Replace/lifestyle-men.jpg",
  },
  {
    img: "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/Update%20May/Replace/sportlife-men.jpg",
  },
  {
    img: "https://zandokh.com/image/catalog/banner/2025/ZANDO/Category%20lifestyle,%20sportlife,%20smartcasual/Update%20May/Replace/casual-men.jpg",
  },
];

const cardContainer = document.querySelector("#card-container-picture");

const cardImg = () => {
  cardContainer.innerHTML = product
    .map(
      (card) =>
        `
           <div id="card">
            <img
              class="w-[400px]"
              src="${card.img}"
              alt=""
            />
          </div>
        `
    )
    .join("");
};
cardImg();

const DataJS = document.querySelector("#data-json");
function DataJson() {
  fetch("./src/page/data/data.json")
    .then((res) => res.json())
    .then(
      (data) =>
        (DataJS.innerHTML = data
          .map(
            (pros) => `
    <div class="xl:min-w-[300px] lg:min-w-[250px] md:min-w-[200px] sm:min-w-[190px] min-w-[150px]  relative bg-[#f5f5f5] overflow-hidden">
            <div id="discount" >
              <p
                class="absolute top-0 text-white bg-red-500 rounded-[5px] m-3 px-[10px] py-[3px] "
              >
                -41%
              </p>
            </div>
            <img
              class=" xl:h-[400px] lg:h-[350px] md:h-[300px] sm:h-[260px] h-[200px] overflow-hidden"
              src=${pros.image}
              alt=""
            />
            <div class="flex justify-between px-[15px] pt-[15px]">
            <div class="xl:flex xl:gap-[10px] lg:flex md:gap-[10px] md:flex lg:gap-[10px] ">
              <p class="text-red-500 font-semibold ">
                US $${pros.price}
              </p>
              <del class="text-black font-normal">US $19.9</del>
              </div>
               <div>
           <i class="fa-regular fa-heart icon-heart cursor-pointer"></i>
 </div>
            </div>
            <p id="title" class="font-semibold px-[15px] truncate sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis">
  Unisex T-Shirts With Printed
</p>

            <div class="flex gap-[10px] px-[15px] py-[10px]">
              <div class="bg-red-500 w-[15px] rounded-[3px] h-[15px]"></div>
              <div class="bg-black w-[15px] rounded-[3px] h-[15px]"></div>
            </div>
          </div>

    `
          )
          .join(""))
    )
    .catch((error) => console.log(error));
}
DataJson();

DataJS.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-heart")) {
    e.target.classList.toggle("fa-regular");
    e.target.classList.toggle("fa-solid");
  }
});

// ---------------------------------- Shose ----------------------------------

const CardShose = document.querySelector("#Card-Shose");

function ShoseCard() {
  fetch("./src/page/data/shose.json")
    .then((res) => res.json())
    .then(
      (data) =>
        (CardShose.innerHTML = data
          .map(
            (pros) => `
    <div class="xl:min-w-[300px] lg:min-w-[250px] md:min-w-[200px] sm:min-w-[190px] min-w-[150px]  relative bg-[#f5f5f5] overflow-hidden">
            <div id="discount" >
              <p
                class="absolute top-0 text-white bg-red-500 rounded-[5px] m-3 px-[10px] py-[3px] "
              >
                -41%
              </p>
            </div>
            <img
              class=" xl:h-[400px] lg:h-[350px] md:h-[300px] sm:h-[260px] h-[200px] overflow-hidden"
              src=${pros.image}
              alt=""
            />
            <div class="flex justify-between px-[15px] pt-[15px]">
            <div class="xl:flex xl:gap-[10px] lg:flex md:gap-[10px] md:flex lg:gap-[10px] ">
              <p class="text-red-500 font-semibold ">
                US $${pros.price}
              </p>
              <del class="text-black font-normal">US $19.9</del>
              </div>
               <div>
           <i class="fa-regular fa-heart icon-heart cursor-pointer"></i>
 </div>
            </div>
            <p id="title" class="font-semibold px-[15px] truncate sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis">
  Unisex T-Shirts With Printed
</p>

            <div class="flex gap-[10px] px-[15px] py-[10px]">
              <div class="bg-red-500 w-[15px] rounded-[3px] h-[15px]"></div>
              <div class="bg-black w-[15px] rounded-[3px] h-[15px]"></div>
            </div>
          </div>

    `
          )
          .join(""))
    )
    .catch((error) => console.log(error));
}
ShoseCard();

// ---------------------------- all in one----------------------------------

const allInShop = document.querySelector("#allshop");
function Shopall() {
  fetch("./src/page/data/allone.json")
    .then((res) => res.json())
    .then(
      (data) =>
        (allInShop.innerHTML = data
          .map(
            (pros) => `
    <div class="xl:min-w-[300px] lg:min-w-[250px] md:min-w-[200px] sm:min-w-[190px] min-w-[150px]  relative bg-[#f5f5f5] overflow-hidden">
            <div id="discount" >
              <p
                class="absolute top-0 text-white bg-red-500 rounded-[5px] m-3 px-[10px] py-[3px] "
              >
                -41%
              </p>
            </div>
            <img
              class=" xl:h-[400px] lg:h-[350px] md:h-[300px] sm:h-[260px] h-[200px] overflow-hidden"
              src=${pros.image}
              alt=""
            />
            <div class="flex justify-between px-[15px] pt-[15px]">
            <div class="xl:flex xl:gap-[10px] lg:flex md:gap-[10px] md:flex lg:gap-[10px] ">
              <p class="text-red-500 font-semibold ">
                US $${pros.price}
              </p>
              <del class="text-black font-normal">US $19.9</del>
              </div>
               <div>
           <i class="fa-regular fa-heart icon-heart cursor-pointer"></i>
 </div>
            </div>
            <p id="title" class="font-semibold px-[15px] truncate sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis">
  Unisex T-Shirts With Printed
</p>

            <div class="flex gap-[10px] px-[15px] py-[10px]">
              <div class="bg-red-500 w-[15px] rounded-[3px] h-[15px]"></div>
              <div class="bg-black w-[15px] rounded-[3px] h-[15px]"></div>
            </div>
          </div>

    `
          )
          .join(""))
    )
    .catch(error);
}
Shopall();
