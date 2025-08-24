
const words1 = [
  "Bayon Temples",
  "Khnang Phsa",
  "Phnom Penh City",
  "Kulen Waterfalls"
];

let i1 = 0; // word index
let j1 = 0; // letter index
let currentWord1 = "";
let isDeleting1 = false;

function typeWriter() {
  const typewriterElement = document.getElementById("typewriter1");
  currentWord1 = words1[i1];

  if (isDeleting1) {
    typewriterElement.textContent = currentWord1.substring(0, j1 - 1);
    j1--;
    if (j1 === 0) {
      isDeleting1 = false;
      i1 = (i1 + 1) % words1.length;
    }
  } else {
    typewriterElement.textContent = currentWord1.substring(0, j1 + 1);
    j1++;
    if (j1 === currentWord1.length) {
      isDeleting1 = true;
    }
  }

  setTimeout(typeWriter, isDeleting1 ? 50 : 100);
}

window.addEventListener("DOMContentLoaded", typeWriter);

 const features = document.querySelectorAll('.feature');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  features.forEach(feature => {
    feature.style.opacity = 0;
    feature.style.transform = 'translateY(50px)';
    feature.style.transition = 'all 0.6s ease-out';
    observer.observe(feature);
  });
// Typewriter Effect
// ===== Typewriter Effect =====

const words = [
  "Discover Ancient Temples",
  "Journey Through Khmer Culture",
  "Experience Cambodia's Beauty"
];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
      if (i === words.length) i = 0;
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j === currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();

class VerticalMouseDrivenCarousel {
  constructor(options = {}) {
    this.defaults = Object.assign({
      carousel: ".js-carousel",
      bgImg: ".js-carousel-bg-img",
      list: ".js-carousel-list",
      listItem: ".js-carousel-list-item"
    }, options);

    this.posY = 0;
    this.init();
    this.initCursor();
    this.bgImgController();
  }

  getBgImgs() { return document.querySelectorAll(this.defaults.bgImg); }
  getListItems() { return document.querySelectorAll(this.defaults.listItem); }
  getList() { return document.querySelector(this.defaults.list); }
  getCarousel() { return document.querySelector(this.defaults.carousel); }

  init() {
    TweenMax.set(this.getBgImgs(), {autoAlpha: 0, scale: 1.05});
    TweenMax.set(this.getBgImgs()[0], {autoAlpha: 1, scale: 1});
    this.getBgImgs()[0].classList.add("is-visible");
    this.listItems = this.getListItems().length - 1;
    this.listOpacityController(0);
  }

  initCursor() {
    const listHeight = this.getList().clientHeight;
    const carouselHeight = this.getCarousel().clientHeight;
    this.getCarousel().addEventListener("mousemove", e => {
      this.posY = e.pageY - this.getCarousel().offsetTop;
      let offset = -(this.posY / carouselHeight * listHeight);
      TweenMax.to(this.getList(), 0.3, {y: offset, ease: Power4.easeOut});
    });
  }

  bgImgController() {
    this.getListItems().forEach(link => {
      link.addEventListener("mouseenter", e => {
        let currentId = e.currentTarget.dataset.itemId;
        this.listOpacityController(currentId);

        document.querySelectorAll(".is-visible").forEach(el => el.classList.remove("is-visible"));
        this.getBgImgs()[currentId].classList.add("is-visible");

        TweenMax.to(this.getBgImgs(), 0.4, {autoAlpha: 0, scale: 1.05});
        TweenMax.to(this.getBgImgs()[currentId], 0.6, {autoAlpha: 1, scale: 1});
      });
    });
  }

  listOpacityController(id) {
    id = parseInt(id);
    let aboveCurrent = this.listItems - id;
    let belowCurrent = id;

    if (aboveCurrent > 0) {
      for (let i = 1; i <= aboveCurrent; i++) {
        TweenMax.to(this.getListItems()[id + i], 0.5, {
          autoAlpha: 0.5 / i, x: 5 * i, ease: Power3.easeOut
        });
      }
    }
    if (belowCurrent > 0) {
      for (let i = 0; i <= belowCurrent; i++) {
        TweenMax.to(this.getListItems()[id - i], 0.5, {
          autoAlpha: 0.5 / (i || 1), x: 5 * i, ease: Power3.easeOut
        });
      }
    }
  }
}

new VerticalMouseDrivenCarousel();
