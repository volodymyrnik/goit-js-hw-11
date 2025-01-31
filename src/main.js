import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { imagesCardTemplate } from './js/render-functions';
import { fetchSearch } from './js/pixabay-api';

const searchForm = document.querySelector('.search-form');
const formInput = document.querySelector('.search-input');
const formBtn = document.querySelector('.search-button');
const imagesListEl = document.querySelector('.gallery');

const loader = document.querySelector('.loader'); // Додати до HTML елемент з класом loader

// Ініціалізація SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = formInput.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  // Очищення галереї перед новим запитом
  imagesListEl.innerHTML = '';
  loader.classList.add('active'); // Показати індикатор завантаження

  fetchSearch(query)
    .then(data => {
      loader.classList.remove('active'); // Приховати індикатор завантаження

      if (data.hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      imagesListEl.insertAdjacentHTML(
        'beforeend',
        imagesCardTemplate(data.hits)
      );
      lightbox.refresh(); // Оновити SimpleLightbox
    })
    .catch(error => {
      loader.classList.remove('active'); // Приховати індикатор завантаження
      iziToast.error({
        message: 'Something went wrong, please try again later.',
        position: 'topRight',
      });
      console.error('Error fetching data:', error);
    });
});

// imagesListEl.insertAdjacentHTML('beforeend', imagesCardTemplate());