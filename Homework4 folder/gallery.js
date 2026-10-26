
const galleryTrack = document.getElementById("galleryTrack");
const galleryWindow = document.getElementById("galleryWindow");

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const pageIndicator = document.getElementById("pageIndicator");

const cards = document.querySelectorAll(".card");

let currentPage = 0;

// Six cards with three visible at a time gives two pages.
function getCardsPerPage() {
    return window.innerWidth <= 700 ? 1 : 3;
}

function getTotalPages() {
    return Math.ceil(cards.length / getCardsPerPage());
}

// Update the gallery position and page number.
function updateGallery() {
    const cardsPerPage = getCardsPerPage();
    const totalPages = getTotalPages();

    // Keep the current page valid if the screen size changes.
    currentPage = currentPage % totalPages;

    const card = cards[0];
    const cardWidth = card.getBoundingClientRect().width;

    const trackStyle = window.getComputedStyle(galleryTrack);
    const gap = parseFloat(trackStyle.columnGap) || 0;

    // Move by one full page of cards.
    const offset = currentPage * cardsPerPage * (cardWidth + gap);

    galleryTrack.style.transform = `translateX(-${offset}px)`;

    pageIndicator.textContent =
        `Page ${currentPage + 1} of ${totalPages}`;
}

// Move to the next page.
rightBtn.addEventListener("click", function() {
    const totalPages = getTotalPages();

    currentPage = (currentPage + 1) % totalPages;

    updateGallery();
});

// Move to the previous page.
leftBtn.addEventListener("click", function() {
    const totalPages = getTotalPages();

    // Loop to the last page when moving backward from page one.
    currentPage = (currentPage - 1 + totalPages) % totalPages;

    updateGallery();
});

// Recalculate card positions when the browser is resized.
window.addEventListener("resize", updateGallery);

// Set the initial gallery position.
updateGallery();

/*
AI assistance reflection:
AI helped me understand addEventListener(), CSS transforms,
card widths, and looping navigation using the modulo operator.
I used these concepts to update the gallery when the buttons
are clicked and to keep the layout responsive.
*/
