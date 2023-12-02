import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", galleryList(galleryItems));
container.addEventListener("click", handleClick);

function galleryList(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}">
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

  const gallery = new SimpleLightbox(".gallery__item a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.5,
  });

  gallery.on("show.simplelightbox", function (e) {
    const currentItemIndex = galleryItems.findIndex(
      (item) => item.original === e._currentTarget.href
    );

    // Заміна вмісту модального вікна на обране зображення
    const modalImage = `
      <img class="gallery__image" src="${galleryItems[currentItemIndex].original}" alt="${galleryItems[currentItemIndex].description}">
    `;

    // Вставка HTML в модальне вікно
    gallery.setContent(modalImage);
  });
}
