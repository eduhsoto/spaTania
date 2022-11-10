import {Head} from "../components/Head.js";
"use strict"

export class Portafolio extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = this.render();
    this.$globalSection = this.querySelector(".head");
    this.generateHeadElement();
  }
  
  generateHeadElement(){
    let headElement = new Head();
    this.attributesHead(headElement);
    this.$globalSection.appendChild(headElement);
  }
  
  attributesHead(component){
    component.setTitle(`Mi experiencia es laboral y académica, dale un vistazo a mis proyectos!`);
    component.setParagraph("Al trabajar para una empresa dedicada a la creación de soluciónes digitales pude obtener mi paión por el deseño UX / UI");
    component.setImage("./assets/img/experience.jpg");
    component.headReverse = false;
  }
  
  render(){
    return `
    <section class="head">
    </section>
    `
  }
}

customElements.define("my-portafolio", Portafolio);