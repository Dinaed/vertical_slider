const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlider = document.querySelector('.main-slide');
const slidesCount = mainSlider.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlide = 0;


sidebar.style.top = `-${(slidesCount-1)*100}vh`;

upButton.addEventListener('click', (event)=>{
  changeSlide('up');
});

downButton.addEventListener('click', (event)=>{
  changeSlide('down');
});

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlide++;
    if (activeSlide === slidesCount) {
      activeSlide = 0;
    }
  }
  else if (direction === 'down') {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slidesCount-1;
    }
  }
  const containerHeight = container.clientHeight;
  mainSlider.style.transform = `translateY(-${containerHeight * activeSlide}px)`;
  sidebar.style.transform = `translateY(${containerHeight * activeSlide}px)`;
}