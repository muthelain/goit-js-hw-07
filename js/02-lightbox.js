import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const addGalleryItems = galleryItems.map(({ preview, original, description }) => `<a class="gallery__item gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join("");
galleryEl.insertAdjacentHTML('beforeend', addGalleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
