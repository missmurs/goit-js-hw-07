import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const modal = basicLightbox.create(document.getElementById("modal"));
  gallery.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("gallery__image")) {
      const imageUrl = e.target.dataset.source;
      document.getElementById("modal-image").src = imageUrl;
      modal.show();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.visible()) {
      modal.close();
    }
  });
});
