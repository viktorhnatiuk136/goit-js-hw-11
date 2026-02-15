import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const divLoader = document.querySelector(".loader");
const list = document.querySelector(".gallery");

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
})

function markup(arr) {
    return arr.map(item => `
        <li class="gallery-item">
            <a href="${item.largeImageURL}">
                <img class="gallery-img" src="${item.webformatURL}" alt="${item.tags}"/>
            </a>
            <ul class="descr">
                <li class="descr-item">
                    <span class="descr-head">Likes</span>
                    <span class="descr-text">${item.likes}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Views</span>
                    <span class="descr-text">${item.views}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Comments</span>
                    <span class="descr-text">${item.comments}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Downloads</span>
                    <span class="descr-text">${item.downloads}</span>
                </li>
            </ul>
        </li>`
    ).join("");
};

export function createMarkup(arr) {
    list.innerHTML = markup(arr);
    lightBox.refresh();
}; 

export function clearGallery() {
    list.innerHTML = ""
}

export function showLoader() {
    divLoader.classList.add("css-loader")
}

export function hideLoader() {
    divLoader.classList.remove("css-loader")
}
    


