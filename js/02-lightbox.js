import { galleryItems } from "./gallery-items.js";

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

  if (event.target === event.curruntTarget) {
    return gallery.next();
  }

  let gallery = new SimpleLightbox(".gallery__item a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.5,
  });
  gallery.on("show.simplelightbox", function () {
    `
        <img class="gallery__image " src="${galleryItems.original}" alt="${galleryItems.description}">
        `;
  });
}
