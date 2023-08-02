class SuperFooterComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'}) //sottospecie di document, scriveremo sulla shadow
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = '<p>© All rights reserved, do not steal this or i will steal© your life</p>'
    }

}

customElements.define('super-footer', SuperFooterComponent)