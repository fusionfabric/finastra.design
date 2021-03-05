// import of styles
import "./styles/index.scss";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import "regenerator-runtime/runtime";

gsap.registerPlugin(TextPlugin);
const middle = innerWidth / 2;

var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

tl.to(".title-emphasis", { y: -100, duration: 0.5 }, 1);
tl.set(".title-emphasis", { text: "change" }, 1.2);
tl.set(".title-emphasis", { y: 80 }, 1.2);
tl.to(".title-emphasis", { y: 0, duration: 0.5 }, 1.2);
tl.to(".title-emphasis", { y: -100, duration: 0.5 }, 4);
tl.set(".title-emphasis", { text: "invent" }, 4.2);
tl.set(".title-emphasis", { y: 80 }, 4.2);
tl.to(".title-emphasis", { y: 0, duration: 0.5 }, 4.2);
tl.to(".title-emphasis", { y: -100, duration: 0.5 }, 7);
tl.set(".title-emphasis", { text: "design" }, 7.2);
tl.set(".title-emphasis", { y: 80 }, 7.2);
tl.to(".title-emphasis", { y: 0, duration: 0.5 }, 7.2);

window.addEventListener("mousemove", (e) => {
  let pos = middle - e.pageX;

  gsap.to(".title", { x: -(0.1 * pos), duration: 1 });
  gsap.to(".img1", { x: -(0.04 * pos), duration: 1 });
  gsap.to(".img2", { x: -(0.025 * pos), duration: 1 });
  gsap.to(".img3 ", { x: -(0.08 * pos), duration: 1 });
  gsap.to(".crop-mark ", { x: -(0.075 * pos), duration: 1 });
});

var button = document.getElementsByClassName("scroll-right")[0];
button.onclick = function () {
    var container = document.getElementsByClassName('carousel')[0];
    scroll(container,'right',10,1000,20);
};

var back = document.getElementsByClassName("scroll-left")[0];
back.onclick = function () {
    var container = document.getElementsByClassName('carousel')[0];
    scroll(container,'left',10,1000,20);
};

function scroll(element, direction, speed, distance, step) {
  var scrollAmount = 0;
  var scrollTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(scrollTimer);
    }
  }, speed);
}
