import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox; // Оголошуємо змінну для збереження інстансу

export const createGallery = (images) => {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => {
    return `
      <li>
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
          <p>Comments: ${image.comments}</p>
          <p>Downloads: ${image.downloads}</p>
        </div>
      </li>
    `;
  }).join('');

  gallery.innerHTML = markup;

  // Ініціалізація SimpleLightbox після рендеру галереї
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', { 
      captionsData: 'alt', 
      captionDelay: 250 
    });
  } else {
    lightbox.refresh();  // Оновлюємо галерею
  }
};

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';  // очищуємо галерею
};

export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('is-visible');
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.remove('is-visible');
};