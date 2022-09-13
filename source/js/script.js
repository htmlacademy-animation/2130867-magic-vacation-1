// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import TextAnimation from './modules/text-animation.js';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, function () {
	document.body.classList.add("loaded");
}); 

const animationTitle = new TextAnimation (`.intro__title`, 600, `active-animation`, `transform`, 100, 30, false);
animationTitle.runAnimation();

const animationDate = new TextAnimation (`.intro__date`, 400, `active-animation`, `transform`, 500, 20, true);
animationDate.runAnimation();

const sliderTitle = new TextAnimation (`.slider__item-title`, 600, `active-animation`, `transform`, 0, 30, true);
sliderTitle.runAnimation();

const prizesTitle = new TextAnimation (`.prizes__title`, 600, `active-animation`, `transform`, 0, 30, true);
prizesTitle.runAnimation();

const rulesTitle = new TextAnimation (`.rules__title`, 600, `active-animation`, `transform`, 0, 30, true);
rulesTitle.runAnimation();

const gameTitle = new TextAnimation (`.game__title`, 600, `active-animation`, `transform`, 0, 30, true);
gameTitle.runAnimation();