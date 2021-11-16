import imageItems from '../tamplates/gallery.hbs';
import refs from './refs';

function updateImagesMarkup(hits) {
  const markup = imageItems(hits);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);

  refs.galleryContainer.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

export default updateImagesMarkup;
