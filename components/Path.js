//not recommend as web component 
/*"use strict"
export class Path extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
        this._timeline = "";
    }

    setTitle(val){
        return this.setAttribute('title', val);
    }

    setDate(val){
        return this.setAttribute('date', val);
    }

    setParagraph(val){
        return this.setAttribute('paragraph', val);
    }

    set timelineNum(val){
        return this._timeline = val;
    }

    get timelineNum(){
        return this._timeline;
    }

    static get observedAttributes() {
        return [''];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `${this.render()} ${this.styles()}`;

        this.addClass();
    }

    addClass(){
        this.$classAdd = this.shadowRoot.querySelector(".card__timeline");
        this.$classAdd.classList.add(this.timelineNum);

        this.$path = this.querySelector("#path");
        console.log(this.$path);
    }

    disconnectedCallback(){
    }

    render(){
        return `
            <div class="card">
                <div class="card__timeline">
                    <h4 class="name__bussines">${this.getAttribute('title')}</h4>
                    <p class="date__work">${this.getAttribute('date')}</p>
                    <p>${this.getAttribute('paragraph')}</p>
                </div>
            </div>
        `
    }

    styles(){
        return `
        <style>
        
        .card{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 400px;
            width: 100%;
            margin-top: 40px;
        }

        .card__timeline{
            padding: 20px 20px;
            border: 1px solid #49494940;
        }

        .timeline-1{
            align-self: flex-start;
        }

        .timeline-2{
            align-self: flex-end;
        }

        </style>
        `
    }
}

customElements.define('path-element', Path);*/