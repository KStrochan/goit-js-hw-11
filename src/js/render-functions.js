import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', { /* your options */ });

export const createGallery = (images) => {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => {
    return `
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
    `;
  }).join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
};

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; 
};

export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('is-visible');
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.remove('is-visible'); 
};