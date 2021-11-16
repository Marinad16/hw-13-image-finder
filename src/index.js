import './sass/main.scss';
import imagesService from './js/images-service';
import updateImagesMarkup from './js/update-image-markup';
import refs from './js/refs';
import spinner from './js/spinner';
import * as basicLightbox from 'basiclightbox';

refs.galleryContainer.addEventListener('click', event => {
  const itemImage = event.target;
  const url = itemImage.getAttribute('src');
  const instance = basicLightbox.create(`
      <img src="${url}">
  `);

  instance.show();
});

refs.searchBtn.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  imagesService.query = form.query.value;
  refs.galleryContainer.innerHTML = '';

  imagesService.resetPage();
  spinner.spin(refs.spinnerref);
  apiService();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', apiService);

function apiService() {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinnerref.classList.remove('is-hidden');

  imagesService
    .apiService()
    .then(hits => {
      updateImagesMarkup(hits);
      refs.loadMoreBtn.classList.remove('is-hidden');
    })
    .finally(() => {
      refs.spinnerref.classList.add('is-hidden');
    });
}

// const instance = basicLightbox.create(`
//     <img src="" width="800" height="600">
// `);

// instance.show();

