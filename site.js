import {Router} from "./route/router.js";
import {showMenu} from "./helper/interaction.js"

class Site{
  constructor(){
    new Router();
    showMenu();
  }
}

new Site();