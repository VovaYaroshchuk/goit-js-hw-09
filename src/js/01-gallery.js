// Add imports above this line
import  { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('div.gallery')

const createGallery = 
galleryItems.map(({preview, original, description}) => 
`
<a class="gallery__item" href=${original}>
<img class="gallery__image" src=${preview} alt=${description} />
</a>
`
)

  gallery.insertAdjacentHTML('beforeend', createGallery.join(''))

  gallery.addEventListener('click' , openBigPicture)

  var lightbox = new SimpleLightbox('.gallery .gallery__item', { captionsData: "alt", captionDelay: "250" });

  function openBigPicture(e) {
      e.preventDefault()

      if (e.target.nodeName !== 'IMG') {
        return;
    };
    
     lightbox

  }