const images = [
  "./images/antelope.jpg",
  "./images/elephant.jpg",
  "./images/lion.jpg",
  "./images/ostrich.jpg",
  "./images/wildebeest.jpg",
  "./images/zebra.jpg",
];

const thumbnailContainer = document.getElementById("thumbnail-container");
let currentIndex = 0;

function updateBackground() {
  document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}

images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Thumbnail of ${src.split("/").pop().split(".")[0]}`;
  img.classList.add("thumbnail");
  img.addEventListener("click", () => {
    currentIndex = index;
    updateBackground();
    backgroundMusic.play();
  });
  thumbnailContainer.appendChild(img);
});

updateBackground();

const backgroundMusic = document.getElementById("background-music");

document.addEventListener("click", () => {
  backgroundMusic.play();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
  }
});
