//not recommend use as component
/*"use strict"
export class Skill extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
    }

    setTitle(val){
        return this.setAttribute('title', val);
    }

    setLi(val){
        return this.setAttribute('items', val);
    }

    static get observedAttributes() {
        return ['items'];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `${this.render()} ${this.styles()}`
    }

    disconnectedCallback(){
    }

    render(){
        return `
                <div class="skills">
                    <h3 class="title">${this.getAttribute('title')}</h3>
                    
                    <ul class="list__skills">
                    ${JSON.parse(this.getAttribute('items')).map(element => `<li>${element}</li>`).join('\n')}
                    </ul>
                </div>
        `
    }

    styles(){
        return `
        <style>

        :host{
            --space_elements: 30px 0px;
            --text-color: #939393;
        }

        .skills{
            padding: 1.25em 2.5em;
            border: 1px solid #49494940;
            width: 50%;
            display:flex;
            flex-direction: column;
            align-self: stretch;
        }

        .title{
            margin-bottom: 16px;
            font-weight: 600;
            line-height: 39px;
            color: #187575FA;
            text-align: center;
        }

        .list__skills>li{
            font-weight: 400;
            line-height: 24px;
            color: var(--text-color);
            margin-bottom: 12px;
        }
        </style>
        `
    }
}

customElements.define('skill-element', Skill);*/