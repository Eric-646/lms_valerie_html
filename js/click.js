/* Click */

window.addEventListener("click", (e) => {
    const rond = document.createElement("div");
    rond.className = 'clickAnimation';
    rond.style.top = `${e.pageY - 50}px`;
    rond.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(rond);

    setTimeout(() => {
        rond.remove();
    }, 1000)
});