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
};

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';  // очищаємо галерею
};

export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('is-visible');  // Показуємо лоадер
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.remove('is-visible');  // Ховаємо лоадер
};