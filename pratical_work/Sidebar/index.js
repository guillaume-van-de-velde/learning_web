const bar = document.querySelector('#sidebar');
const content = document.querySelector('.content');

btn.addEventListener("click", () => {
    bar.classList.toggle('active');
});

content.addEventListener("click", () => {
    bar.classList.remove('active');
})