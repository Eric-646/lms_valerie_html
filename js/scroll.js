/* Scroll */

const scrollBtn = document.querySelector(".scroll-top");


function refreshButtonVisibility ()  {
    if (document.documentElement.scrollTop > 150) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", () => {
    refreshButtonVisibility();
});

