class GameCardComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'}) //sottospecie di document, scriveremo sulla shadow
    }

    connectedCallback(){

        this.render()
    }

    render(){
        if (this.game) {
            
            // this.shadowRoot.innerHTML =''
            // const div = document.createElement('div')
            // this.shadowRoot.appendChild(div)

            // const h3 = document.createElement('h3')
            // h3.appendChild(document.createTextNode(this.game.title))
            // div.appendChild(h3)
            this.shadowRoot.innerHTML = `
            <style>
            .card{
                display: flex;
                flex-direction: column;
                background-color: #313131;
                border-radius: 16px;
                padding: 16px;
                color: ;
                margin: 16px;
                align-items: center;
            }
            
            .card-title{
                font-size: x-large;
                font-weight: bold;
            }

            .card-author{
                font-size: large;
            }

            .card-details{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                text-align: center;
                gap: 8px
                
            }



            
            </style>
            `
            this.shadowRoot.innerHTML += `
            <div class="card">
                <span class="card-title">${this.game.title}</span>
                <span class="card-author">${this.game.author}</span>
                <div class="card-details">
                    <span class="card-detail">${this.game.yop}</span>
                    <span class="card-detail">${this.game.genre}</span>
                    <span class="card-detail">${this.game.isMultiplayer? 'Multiplayer' : 'Singleplayer'}</span>
                </div>
            </div>
            `
            const deleteBtn = document.createElement('button')
            deleteBtn.appendChild(document.createTextNode('Elimina'))
            
            this.shadowRoot.querySelector('.card').appendChild(deleteBtn)
            deleteBtn.addEventListener('click',()=> this.emitEvent())
        }
    }

    emitEvent(){
        const customEvent = new CustomEvent('card-clicked', {detail: this.game.title})
        this.dispatchEvent(customEvent);
    }

}

customElements.define('game-card', GameCardComponent)