class SuperHeaderComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'}) //sottospecie di document, scriveremo sulla shadow
    }

    connectedCallback(){

        this.render()
    }

    render(){
        this.shadowRoot.innerHTML= ''
        this.shadowRoot.innerHTML=`
        <style>
        a:active,
        a:visited,
        a:link,
        a{
            color: #eaeaea;
        }
        </style>
        `
        
        const style = document.createElement('style');
        style.innerHTML = `h1{color: ${this.getAttribute('title-color')}}`;
        this.shadowRoot.appendChild(style);
        

        // this.shadowRoot.innerHTML = this.getAttribute('super-title')
        const h1 = document.createElement('h1')
        const h1Text = document.createTextNode(this.getAttribute('super-title'))
        h1.appendChild(h1Text)
        this.shadowRoot.appendChild(h1)
        const page2Link = document.createElement('a')
        page2Link.href = './page2.html'
        page2Link.appendChild(document.createTextNode('Vai alla pagina 2 S'))
        this.shadowRoot.appendChild(page2Link)
    }

    attributeChangedCallback(name,oldValue, newValue){
        console.log(name);
        if(oldValue!== newValue){
            this.render()
        }
        
    }

    static get observedAttributes(){
        return['title-color', 'super-title']
    }


}

customElements.define('super-header', SuperHeaderComponent)