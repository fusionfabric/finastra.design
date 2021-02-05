// import of styles
import './styles/index.scss'

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import 'regenerator-runtime/runtime'

gsap.registerPlugin(TextPlugin);
const middle = innerWidth / 2;

var tl = gsap.timeline({repeat: -1, repeatDelay: 1});

init();

const sleep = ms => new Promise(res => setTimeout(res, ms));

let run=async function(){
  show1();
  hide2();
  hide3();
  await sleep(5000);
  hide1();
  show2();
  await sleep(5000);
  hide2();
  show3();
  await sleep(5000);
}

run();
window.setInterval(async function(){
  run();
},15000);


tl.to(".title-emphasis", {y: -100, duration: 0.5}, 1);
tl.set(".title-emphasis", {text: "change"}, 1.2);
tl.set(".title-emphasis", {y: 80}, 1.2);
tl.to(".title-emphasis", {y: 0, duration: 0.5}, 1.2);
tl.to(".title-emphasis", {y: -100, duration: 0.5}, 4);
tl.set(".title-emphasis", {text: "invent"}, 4.2);
tl.set(".title-emphasis", {y: 80}, 4.2);
tl.to(".title-emphasis", {y: 0, duration: 0.5}, 4.2);
tl.to(".title-emphasis", {y: -100, duration: 0.5}, 7);
tl.set(".title-emphasis", {text: "design"}, 7.2);
tl.set(".title-emphasis", {y: 80}, 7.2);
tl.to(".title-emphasis", {y: 0, duration: 0.5}, 7.2);

window.addEventListener("mousemove", e => {
  let pos = middle - e.pageX;
  
  gsap.to(".title", {x: -(0.10*pos), duration: 1});
  gsap.to(".img1", {x: -(0.040*pos), duration: 1});
  gsap.to(".img2", {x: -(0.025*pos), duration: 1});
  gsap.to(".img3 ", {x: -(0.080*pos), duration: 1});
  gsap.to(".crop-mark ", {x: -(0.075*pos), duration: 1});
});

function init(){
  hide2();
  hide3();
  document.getElementsByClassName("mission-text-1")[0].style.setProperty("--content-mission-tag-color", '#56F28C');
  document.getElementsByClassName("mission-text-2")[0].style.setProperty("--content-mission-tag-color", '#36D4F2');
  document.getElementsByClassName("mission-text-3")[0].style.setProperty("--content-mission-tag-color", '#E945C1');
}

function hide1() {
  document.getElementsByClassName("mission-text-content-1")[0].style.display = "none";
  document.getElementsByClassName("mission-text-title-1")[0].style.opacity="0.5";
  document.getElementsByClassName("mission-text-1")[0].style.setProperty("--content-mission-tag-width", '13%');
}

function hide2() {
  document.getElementsByClassName("mission-text-content-2")[0].style.display = "none";
  document.getElementsByClassName("mission-text-title-2")[0].style.opacity="0.5";
  document.getElementsByClassName("mission-text-2")[0].style.setProperty("--content-mission-tag-width", '13%');
}

function hide3() {
  document.getElementsByClassName("mission-text-content-3")[0].style.display = "none";
  document.getElementsByClassName("mission-text-title-3")[0].style.opacity="0.5";
  document.getElementsByClassName("mission-text-3")[0].style.setProperty("--content-mission-tag-width", '13%');
}

function show1() {
  document.getElementsByClassName("mission-text-content-1")[0].style.display = "block";
  document.getElementsByClassName("mission-text-title-1")[0].style.opacity="1";
  document.getElementsByClassName("img-1")["0"].src="./images/home/content/mission/img1.png";
  document.getElementsByClassName("mission-image")[0].style.animationDelay="0s";

  document.getElementsByClassName("mission-text-1")[0].style.setProperty("--content-mission-tag-width", '20%');
  document.getElementsByClassName("mission-text-1")[0].style.setProperty("--content-mission-tag-color", '#56F28C');

  document.getElementsByClassName("mission-image")[0].style.setProperty("--content-mission-tag-color",'#56F28C');
  document.getElementsByClassName("mission-image")[0].style.setProperty("--content-mission-second-gradient-color",'#30D897');
  document.getElementsByClassName("mission-image")[0].style.setProperty("--content-mission-image-icon", 'url("./images/home/content/mission/icon-arrow.svg")');
}

function show2() {
  document.getElementsByClassName("mission-text-content-2")[0].style.display = "block";
  document.getElementsByClassName("mission-text-title-2")[0].style.opacity="1";
  document.getElementsByClassName("img-1")["0"].src="./images/home/content/mission/img2.png";
  document.getElementsByClassName("mission-image")[0].style.animationDelay="5s";

  document.getElementsByClassName("mission-text-2")[0].style.setProperty("--content-mission-tag-width", '20%');
  document.getElementsByClassName("mission-text-2")[0].style.setProperty("--content-mission-tag-color", '#36D4F2');

  document.getElementsByClassName("mission-image")[0].style.setProperty("--content-mission-tag-color",'#36D4F2');
  document.getElementsByClassName("mission-image")[0].style.setProperty("--content-mission-second-gradient-color",'#259DE8');
  document.getElementsByClassName("mission-image")[0].style.setProperty("--content-mission-image-icon", 'url("./images/home/content/mission/code.svg")');
}

function show3() {
  document.getElementsByClassName("mission-text-content-3")[0].style.display = "block";
  document.getElementsByClassName("mission-text-title-3")[0].style.opacity="1";
  document.getElementsByClassName("img-1")["0"].src="./images/home/content/mission/img3.png";
  document.getElementsByClassName("mission-image")[0].style.animationDelay="10s";

  document.getElementsByClassName("mission-text-3")[0].style.setProperty("--content-mission-tag-color", '#E945C1');
  document.getElementsByClassName("mission-text-3")[0].style.setProperty("--content-mission-tag-width", '20%');

  document.getElementsByClassName("mission-image")[0].style.setProperty("--content-mission-tag-color",'#E945C1');
  document.getElementsByClassName("mission-image")[0].style.setProperty("--content-mission-second-gradient-color",'#F918A1');
  document.getElementsByClassName("mission-image")[0].style.setProperty("--content-mission-image-icon", 'url("./images/home/content/mission/compas.svg")');
}