const myslides = document.querySelectorAll(".slides");
var counter = 0;
myslides.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});
const slideImage = () => {
  myslides.forEach((slides) => {
    slides.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const goPrev = () => {
  if (counter == 0) {
    counter = myslides.length - 1;
    slideImage();
  } else {
    counter--;
    slideImage();
  }
};
const goNext = () => {
  if (counter == myslides.length - 1) {
    counter = 0;
    slideImage();
  } else {
    counter++;
    slideImage();
  }
};
