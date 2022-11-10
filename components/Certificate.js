"use strict"
export class Certificate extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
    }

    setImage(val){
        return this.setAttribute('img', val);
    }

    setHref(val){
        return this.setAttribute('href', val);
    }

    static get observedAttributes() {
        return [''];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `${this.render()} ${this.styles()}`;

        this.getImage();
        this.getHref();
    }

    getImage(){
        this.$image = this.shadowRoot.querySelector('.certificate__image');
        this.$image.src = this.getAttribute('img');
    }

    getHref(){
        this.$href = this.shadowRoot.querySelector('.certificate__link');
        this.$href.href = this.getAttribute('href');
    }

    disconnectedCallback(){
    }

    render(){
        return `
        <div class="certificate__group">
            <img class="certificate__image">
            <a class="certificate__link" target="_blank">Ver</a>
        </div>             
        `
    }

    styles(){
        return `
        <style>
        .certificate__group {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
        }

        .certificate__image{
            width: 80%;
        }

        .certificate__link {
            padding: 10px 10px;
            width: 50%;
            text-align: center;
            border: 1px solid var(--complementary_color);
            color: var(--complementary_color);
            border-radius: 5px;
            transition: .3s;
            text-decoration: none;
            margin: 20px 0px;
            font-weight: 600;
        }

        .certificate__link:hover{
            background-color: var(--complementary_color);
            color: var(--primary_color);
        }

        </style>
        
        `
    }
}

customElements.define('certificate-element', Certificate);