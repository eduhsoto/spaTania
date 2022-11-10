//not recommend use as component
"use strict"
export class Objective extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
        this._isListed = false;
    }

    setParagraph(val){
        return this.setAttribute('paragraph', val);
    }

    setImage(val){
        return this.setAttribute('img', val);
    }

    set listed(val){
        this._isListed = val;
    }

    get listed(){
        return this._isListed;
    }

    static get observedAttributes() {
        return [''];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `${this.render()} ${this.styles()}`;

        this.getImage();
        this.generateList();
    }

    getImage(){
        this.$image = this.shadowRoot.querySelector('.card__image');
        this.$image.src = this.getAttribute('img');
    }

    generateList(){
        this.$adyacenElement = this.shadowRoot.querySelector('.text__objetives')
        let itemsList = ["Pasión","Respeto","Honestidad","Resposabilidad","Puntualidad","Trabajo en equipo"];
        
        if(this.listed !== false){
            let ul = document.createElement('ul');
            ul.classList.add("values");
            ul.innerHTML = `${itemsList.map(item => `<li>${item}</li>`).join('\n')}`
            this.$adyacenElement.insertAdjacentElement('afterend', ul);
        }
    }

    disconnectedCallback(){
    }

    render(){
        return `
                <div class="card__objectives">
                    <img  alt="goal image" class="card__image">
                    <p class="text__objetives">${this.getAttribute('paragraph')}</p>
                </div>
        `
    }

    styles(){
        return `
        <style>
        :host{
            display:flex;
            justify-content: space-evenly;
            align-self: stretch;
            max-width: 300px;  
        }

        .card__objectives{
            padding: 1.25em 2.5em;
            border: 1px solid #49494940;

            background-color: var(--primary_color);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .card__image {
            width: 40%;
            margin-bottom: 20px;
        }

        p, .values {
            font-weight: 400;
            font-size: 1em;
            line-height: 24px;
            color: var(--text_color);
            margin-bottom: 20px;
        }

        .values{
            list-style: none; 
        }
    
        </style>
        `
    }
}

customElements.define('objective-element', Objective);