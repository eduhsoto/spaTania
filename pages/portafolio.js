import {Head} from "../components/Head.js";
import {Project} from "../components/Project.js";

"use strict"

export class Portafolio extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = this.render();
    this.generateHeadElement();
    this.generatePortafolioElement();
  }
  
  generateHeadElement(){
    this.$globalSection = this.querySelector(".head");
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

  generatePortafolioElement(){
    this.$globalSection = this.querySelector("#portafolio");
    let projectElement = new Project();
    this.attributesProject(projectElement);
    this.$globalSection.appendChild(projectElement);
  }

  attributesProject(element){
    element.setImage("./assets/img/portafolio-item.jpg");
    element.setTitle("Worclick");
    element.setCategory("Diseño UX");
    element.setParagraph("Diseño de sitio web y móvil para el reclutamiento de recursos humanos y búsqueda de empleo.");
  }

  render(){
    return `
    <section class="head">
    </section>
    <section> 
      <div id="portafolio" class="container">
      </div>
    </section> 
    `
  }
}

customElements.define("my-portafolio", Portafolio);