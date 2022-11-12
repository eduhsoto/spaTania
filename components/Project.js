"use strict"
export class Project extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
    }

    setTitle(val){
        return this.setAttribute('title', val);
    }

    setParagraph(val){
        return this.setAttribute('paragraph', val);
    }

    setCategory(val){
        return this.setAttribute('category', val);
    }

    setImage(val){
        return this.setAttribute('img', val);
    }

    static get observedAttributes() {
        return [''];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `${this.render()} ${this.styles()}`;

        this.getImage();
    }

    getImage(){
        this.$image = this.shadowRoot.querySelector('.img');
        this.$image.src = this.getAttribute('img');
    }

    disconnectedCallback(){
    }

    render(){
        return `
        <div class="card__portafolio">
            <a href="https://www.behance.net/gallery/148786781/WorkClick" target="_blank">
            <div class="flex">
                
                <img alt="portafolio image" class="img image">
       
                <div class="detail">
                    <h1 class="title">${this.getAttribute('title')}</h1>
                    <p class="category">${this.getAttribute('category')}</p>
                    <p class="paragraph">${this.getAttribute('paragraph')}</p>
                </div>
                </div>
            </a>
        </div>
        `
    }

    styles(){
        return `
        <style>

        :host{
            --space_elements: 30px 0px;
        }

        .card__portafolio{

        }

        .image{
            position: relative;
            width: 100%;
        }

        .detail{
            position: absolute;
            background: rgba(248, 248, 248, 0.8);
            width: 490px;
            padding: 20px 30px;
        }

        .flex{
            display: flex;
            align-items: flex-end;
        }

        h1{
            font-weight: 800;
            font-size: 2em;
            line-height: 49px;
            color:black;
            margin-bottom: 20px;
        }

        p{
            font-weight: 400;
            font-size: 1em;
            color:black;
            line-height: 24px;
        }

        @media screen and (max-width: 540px)
        .detail {
            width: 269px;
        }
        </style>
        `
    }
}

customElements.define('project-element', Project);