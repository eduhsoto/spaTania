import {Head} from "../components/Head.js";
import {Objective} from "../components/Objective.js"

export class Home extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = this.render();

        this.generateHeadElement();
        this.generateObjetiveElement();
    }

    generateHeadElement(){
      this.$headElement = this.querySelector('.head');

      let headElement = new Head();
      this.attributesHead(headElement);
      this.$headElement.appendChild(headElement);
    }

    attributesHead(component){
      component.setTitle( `Hola! <br> Mi nombre es Tania y soy diseñadora UX`);
      component.setParagraph("Soy estudiante de Ingeniería en Desarrollo y Gestión de Software, resido actualmente en la ciudad de Guadalajara Jalisco México.");
      component.setImage("./assets/img/profile-tania.png");
      component.headReverse = false;
    }

    generateObjetiveElement(){
      this.$objetiveElement = this.querySelector('#objectives');

      let objetiveGoal = new Objective();
      let objetiveVision = new Objective();
      let objetiveHonesty = new Objective();

      this.attributesObjective(objetiveGoal, objetiveVision, objetiveHonesty);
      this.$objetiveElement.appendChild(objetiveGoal);
      this.$objetiveElement.appendChild(objetiveVision);
      this.$objetiveElement.appendChild(objetiveHonesty);
    }

    attributesObjective(objetiveGoal, objetiveVision, objetiveHonesty){
      objetiveGoal.setImage("./assets/img/goal.png");
      objetiveGoal.setParagraph("Mi objetivo es desarrollar mi carrera profesiónal formando parte de una empresa que me permita aplicar lo que he aprendido y seguir creciendo de manera tanto profesiónal como personal.");
      objetiveGoal.listed = false;

      objetiveVision.setImage("./assets/img/vision.png");
      objetiveVision.setParagraph("Crear diseños llamativos, intuitivos y funcionales que mejoren la experiencia de las personas que utilizan tecnología ayudando a lograr sus objetivos de manera rápida y eficaz.");
      objetiveVision.listed = false;

      objetiveHonesty.setImage("./assets/img/honesty.png");
      objetiveHonesty.setParagraph("He aprendido a trabajar y vivir bajo valores que me permiten ser quien soy:");
      objetiveHonesty.listed = true;
    }

    disconnectedCallback(){
    }
    
    render(){
      return `
      <div class="head">
      </div>
      <section class="about__me">
        <div class="container">
            <div class="about">
                <h2 class="title__grade">Técnico Superior Universitario</h2>
                <p class="title__specialization">Especialista UX / UI orientada en el ser humano.</p>
                <p>Soy estudiante de Ingeniería en Tecnologías de la comunicación, área desarrollo y gestión de software.</p>
                <p>Tengo confianza en mi capacidad para generar ideas, trabajar en equipo, adquirir conocimientos y crecer profesionalmente.</p>
                <p>Mi pasión es crear y mejorar experiencias de los usuarios, pensando en el ser humano que utiliza las aplicaciones por medio de la tecnología, agilizando los procesos con diseños funcionales y atractivos.</p>
            </div>

                <img src="./assets/img/ux-image.png" alt="ux image" class="ux__image about">
        </div>
      </section>
      <section>
        <div class="container">
                <div class="skills">
                    <h3 class="title__skills">Habilidades blandas</h3>
                    <ul class="list__skills">
                        <li>Excelente comunicación oral y escrita.</li>
                        <li>Trabajo en equipo y capacidad de liderazgo.</li>
                        <li>Desarrollo de experiencias centradas en el ser humano.</li>
                        <li>Capacidad de autoaprendizaje.</li>
                        <li>Pensamiento estratégico.</li>
                    </ul>
                </div>

                <div class="skills">
                    <h3 class="title__skills">Habilidades técnicas</h3>
                    <ul class="list__skills">
                        <li>HTML, CSS, Bootstrap.</li>
                        <li>Adobe XD.</li>
                        <li>Figma.</li>
                        <li>Invision Studio.</li>
                        <li>Metodologías Ágiles (Manejo de tableros Scrum y Kanban).</li>
                        <li>Design Thinking.</li>
                        <li>Conocimiento de leyes cognitivas, creación de flujos, investigación de casos de uso y desarrollo de diseño visual.</li>
                    </ul>
                </div>
        </div>
      </section>
      
      <section class="objectives"> 
      <div id="objectives" class="container">
      </div>
      </section>    
      `
    }
  }
  
  customElements.define('home-page', Home);
