import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const itemMarkup = createItemsMarkup(galleryItems);

function createItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
</div>`;
    })
    .join("");
}
galleryEl.insertAdjacentHTML("beforeend", itemMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
