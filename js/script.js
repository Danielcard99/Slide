import { SlideNav } from "../modules/slide.js";

const slide = new SlideNav(".slide", ".slideWraper");
slide.init();
slide.addArrow(".prev", ".next");

