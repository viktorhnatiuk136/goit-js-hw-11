import { getImagesByQuery } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = event.target.elements["search-text"].value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Введіть дані для пошуку',
            timeout: 1000,
            position: 'topRight'
        })
        return
    } 
        clearGallery();
        showLoader();
    getImagesByQuery(query)
        .then(response => {
            if (response.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    timeout: 1000,
                    position: 'topRight'
                })
                form.reset();
                return
            } else {
                createMarkup(response.hits);
            }
        })
        .catch(error =>
            iziToast.error({
                title: "Error",
                message: "Something went wrong. Please try again later.",
                position: "topRight",
            }))
        .finally(() => {
            hideLoader();
            form.reset();
        })
    })