document.querySelectorAll('.how-works-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('how-works__discription-item--active');
    })
);

const images = document.querySelectorAll('.slider .slider-item');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider()
}
window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}