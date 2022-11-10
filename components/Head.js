"use strict"
export class Head extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
        this._headReverse = true;
    }

    setTitle(val){
        return this.setAttribute('title', val);
    }

    setParagraph(val){
        return this.setAttribute('paragraph', val);
    }

    setImage(val){
        return this.setAttribute('img', val);
    }

    set headReverse(val){
        return this._headReverse = val;
    }

    get headReverse(){
        return this._headReverse;
    }

    static get observedAttributes() {
        return [''];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `${this.render()} ${this.styles()}`;

        this.getImage();
        this.rowReverse();
    }

    getImage(){
        this.$image = this.shadowRoot.querySelector('.image');
        this.$image.src = this.getAttribute('img');
    }

    rowReverse(){
        if(this.headReverse){
            this.$head = this.shadowRoot.querySelector('.head');
            this.$description = this.shadowRoot.querySelector('.description');

            this.$head.classList.add('reverse');
            this.$description.classList.replace('description', 'description__reverse');
        }
    }

    disconnectedCallback(){
    }

    render(){
        return `
        <section class="head">
            <img alt="profile image" class="image">
            <div class="description">
                <h1 class="title">${this.getAttribute('title')}</h1>
                <p class="paragraph">${this.getAttribute('paragraph')}</p>
            </div>
        </section>
        `
    }

    styles(){
        return `
        <style>

        :host{
            --text_color: rgba(0, 0, 0, 0.47);
            --primary_color: #FFFFFF;
            --background_color_head: rgba(218, 218, 218, 0.9);
            --space_elements: 30px 0px;
        }
        
        .image{
            width: 60%;
          }

        .head{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(261px, 1fr));
            justify-items: center;
            align-items: center;
            padding: var(--space_elements);
            background: var(--background_color_head);
            gap: 20px;
            height: 500px;
        }

        .reverse{
            direction: rtl;
        }

        .description__reverse{
            background: linear-gradient(-270deg, rgba(243, 90, 126, 0.98) 26.24%, rgba(249, 175, 122, 0) 94.14%);
            padding: 5em 4em;
        }
        
        .description{
            background: linear-gradient(270deg, rgba(243, 90, 126, 0.98) 26.24%, rgba(249, 175, 122, 0) 94.14%);
            padding: 5em 4em;
            text-align: right;
        }

        h1{
            font-weight: 800;
            font-size: 2em;
            line-height: 49px;
            color: var(--primary_color);
            margin-bottom: 20px;
        }

        p{
            font-weight: 400;
            font-size: 1em;
            line-height: 24px;
            color: var(--text_color);
        }
        </style>
        `
    }
}

customElements.define('head-element', Head);