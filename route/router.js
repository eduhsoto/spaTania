import {Home} from "../pages/home.js"
import {MyPath} from "../pages/my-path.js"
import {Portafolio} from "../pages/portafolio.js"

"use strict"

export class Router{
    constructor(){
        this.init();
    }

    static injectHTML(component){
        const $page = document.querySelector('#site');
        while($page.firstChild){
            $page.removeChild($page.firstChild);
        }
        $page.appendChild(component);
        
    }

    init(){
        this.routes = {
          "/": {path: '/', page: Home},
          "/my-path": {path: '/my-path', page: MyPath},
          "/portafolio": {path: '/portafolio', page: Portafolio}
        }
        
        this.defaultPage();
        
        const $links = document.querySelectorAll('a.item');    
        $links.forEach(link => {
        link.addEventListener("click", e => this.navigate(e, link));
        })
    }

    navigate(e, link){
        e.preventDefault();
        let state = link.getAttribute("href");
        window.history.pushState({}, "", e.target.href);
        this.url(link);   
        this.activeLink(link); 
        this.backForward();
    }
    
    url(link) {
        let hrf = link.getAttribute("href");
        this.defaultPage(hrf);
    }

    activeLink(){
        let currentLocation = window.location.pathname;
        const $links = document.querySelectorAll('a.item');
        $links.forEach(link => {
        link.classList.remove('active__page');
        let linkRoute = link.getAttribute('href');
           if(linkRoute === currentLocation){
            link.classList.add('active__page');
           }
        })
    }
      
    defaultPage(location = "/"){
        const {routes} = this;
        const route = routes[location];
        Router.injectHTML(new route.page); 
    }

    backForward(){  
        window.onpopstate = (e) => {
            if(e.isTrusted){ 
                let oldPage = e.target.location.pathname;
                this.defaultPage(oldPage);
                this.activeLink();
            }
        }
    }
}