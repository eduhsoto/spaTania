import {Router} from "./route/router.js";
import {showMenu, animationScroll} from "./helper/interaction.js"

class Site{
  constructor(){
    new Router();
    showMenu();
    animationScroll();
  }
}

new Site();