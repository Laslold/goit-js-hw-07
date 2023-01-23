import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const itemMarkup = createItemsMarkup(galleryItems);

function createItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
galleryEl.insertAdjacentHTML("beforeend", itemMarkup);

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const bigImageUrl = e.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src="${bigImageUrl}" width="1280" height="auto">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscClose);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscClose);
      },
    }
  );

  instance.show();

  function onEscClose(evt) {
    const EscKey = evt.code === "Escape";
    if (EscKey) {
      instance.close();
    }
  }
});
