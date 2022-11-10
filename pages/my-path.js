import {Head} from "../components/Head.js";
//import {Path} from "../components/Path.js";
import {Certificate} from "../components/Certificate.js"
"use strict"

export class MyPath extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = this.render();
    
    this.generateHeadElement();
    //this.generatePathElement();
    this.generateCertificateElement();
  }
  
  generateHeadElement(){
    this.$globalSection = this.querySelector(".head");
    let headElement = new Head();
    this.attributesHead(headElement);
    this.$globalSection.appendChild(headElement);
  }
  
  attributesHead(component){
    component.setTitle("Mi trayectoria en el mundo laboral");
    component.setParagraph("Soy una persona creativa apasionada por crear experiencias que satisfagan las necesidades humanas al utilizar tecnología.");
    component.setImage("./assets/img/path-image.png");
    component.headReverse = true;
  }

  /*generatePathElement(){
    this.$path = this.querySelector("#path");
    let pathElement1 = new Path();
    let pathElement2 = new Path();
    let pathElement3 = new Path();
    this.attributesPath(pathElement1, pathElement2, pathElement3);
    this.$path.appendChild(pathElement1);
    this.$path.appendChild(pathElement2);
    this.$path.appendChild(pathElement3);
  }

  attributesPath(c1,c2,c3){
    c1.setTitle("SerimarqPrint");
    c1.setDate("Agosto 2015 - Febrero 2021");
    c1.setParagraph("Gerente General: Atención a proveedores, compras de materiales, encargado de producción, facturación en el portal del SAT, atención al cliente.");
    c1.timelineNum = "timeline-1";

    c2.setTitle("Esprezza");
    c2.setDate("Marzo  2021 - Abril  2021");
    c2.setParagraph("Gerente General: Atención a proveedores, compras de materiales, encargado de producción, facturación en el portal del SAT, atención al cliente.");
    c2.timelineNum = "timeline-2";

    c3.setTitle("IBM Student");
    c3.setDate("Abril  2021 - Abril 2022");
    c3.setParagraph("Diseño UX/UI: Creación de experiencias centradas en el usuario, utilizando herramientas cognitivas del pensamiento humano, psicología del color, técnicas para mejorar la usabilidad en la creación y seguimiento de procesos digitales para proporcionar herramientas que le sirvan a los desarrolladores e interesados para una visualización digital del diseño de las aplicaciones.<p>Maquetado de interfaces: Transformar el diseño de una web para que los navegadores puedan interpretarlos y reproducirlos correctamente en diferentes dispositivos.</p><p>Ayudante y estudiante de Analista de negocios: Creación de historias de usuario, desglosando el proceso en pequeñas partes utilizando la metodología de Design Thinking, generando soluciones de acuerdo a problemas previamente detectados, creación de propuestas en diseño visual ante nuevos requerimientos y creación de documentación.</p>");
    c3.timelineNum = "timeline-3";

  }*/

  generateCertificateElement(){
    this.$certificate = this.querySelector("#certificate");
    let cerElement1 = new Certificate();
    let cerElement2 = new Certificate();
    let cerElement3 = new Certificate();
    let cerElement4 = new Certificate();
    this.attributesCertificate(cerElement1, cerElement2, cerElement3, cerElement4);
    this.$certificate.appendChild(cerElement1);
    this.$certificate.appendChild(cerElement2);
    this.$certificate.appendChild(cerElement3);
    this.$certificate.appendChild(cerElement4);
  }

  attributesCertificate(c1,c2,c3, c4){
    c1.setImage("./assets/img/certificate-ibm-1.jpg");
    c1.setHref("https://www.credly.com/badges/a8745ec5-4224-4c71-ac24-95948db4ab74?source=linked_in_profile");

    c2.setImage("./assets/img/certificate-ibm-2.jpg");
    c2.setHref("https://www.credly.com/badges/0684844f-1065-4de0-93a5-6455c8ab0a8e?source=linked_in_profile");

    c3.setImage("./assets/img/certificate-ibm-3.jpg");
    c3.setHref("https://www.credly.com/badges/4750689b-f467-45a8-b877-adbe3d807677?source=linked_in_profile");

    c4.setImage("./assets/img/certificate-ibm-4.png");
    c4.setHref("https://www.credly.com/badges/383741cb-3c1c-42ff-8a24-3f7b332717b2?source=linked_in_profile");

  }
  
  disconnectedCallback(){
  }
  
  render(){
    return `
    <div class="head">
    </div>
    <!--<section> 
      <div id="path" class="container">
        <h2 class="title__grade">Mi trayectoria</h2>
      </div>
    </section>-->
    <section class="path__timeline">
        <div class="container flex__columns">
            <h2 class="title__grade">Mi trayectoria</h2>
            
            <div class="card">
                <div class="card__timeline timeline1">
                    <h4 class="name__bussines">SerimarqPrint</h4>
                    <p class="date__work">Agosto 2015 - Febrero 2021</p>
                    <p>Gerente General: Atención a proveedores, compras de materiales, encargado de producción, facturación en el portal del SAT, atención al cliente.</p>
                </div>
                
                <img src="./assets/img/path-timeline.png" alt="lines" class="lines">
                
                <div class="card__timeline timeline2">
                    <h4 class="name__bussines">Esprezza</h4>
                    <p class="date__work">Marzo  2021 - Abril  2021</p>
                    <p>Becario en el área de soporte técnico encargado de atender incidencias de hardware y software dentro de la empresa.</p>
                </div>
            </div>

            <div class="card__timeline timeline3">
                <h4 class="name__bussines">IBM Student</h4>
                <p class="date__work">Abril  2021 - Abril 2022</p>
                <p>Diseño UX/UI: Creación de experiencias centradas en el usuario, utilizando herramientas cognitivas del pensamiento humano, psicología del color, técnicas para mejorar la usabilidad en la creación y seguimiento de procesos digitales para proporcionar herramientas que le sirvan a los desarrolladores e interesados para una visualización digital del diseño de las aplicaciones.</p>
                <p>Maquetado de interfaces: Transformar el diseño de una web para que los navegadores puedan interpretarlos y reproducirlos correctamente en diferentes dispositivos.</p>
                <p>Ayudante y estudiante de Analista de negocios: Creación de historias de usuario, desglosando el proceso en pequeñas partes utilizando la metodología de Design Thinking, generando soluciones de acuerdo a problemas previamente detectados, creación de propuestas en diseño visual ante nuevos requerimientos y creación de documentación.</p>
            </div>
        </div>
    </section> 
    <section>
      <div class="container flex__columns">
        <h2 class="title__grade">Áreas de conocimiento</h2>
        <div id="certificate" class="certificates__row">
        </div>
      </div>
    </section> 
    `
  }
}

customElements.define("my-path", MyPath);