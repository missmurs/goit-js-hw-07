import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
      </li>
    `
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const modalImg = event.target.closest(".gallery__link").getAttribute("href");
  const instance = basicLightbox.create(`
    <img class="gallery__image" src="${modalImg}" alt="">
  `);

  instance.show();

  document.addEventListener("keydown", handleKeyPress);

  function handleKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleKeyPress);
    }
  }
}
