class GameListComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'}) //sottospecie di document, scriveremo sulla shadow
    }

    connectedCallback(){
        fetch('./games-data.json')
        .then(resp => resp.json())
        .then(res => this.render(res));

    }

    disconnectedCallback(){

    }

    render(games){
        this.shadowRoot.innerHTML= '';
        const mainContainer = document.createElement('div') 
        this.shadowRoot.appendChild(mainContainer)
        // const ul = document.createElement('ul');
        // this.shadowRoot.appendChild(ul)

        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            const cardComponent = document.createElement('game-card')
            cardComponent.addEventListener('card-clicked', (e)=> console.log('evento',e))
            cardComponent.game = game
            cardComponent.render()
            mainContainer.appendChild(cardComponent)
        }

    }

}

customElements.define('games-list', GameListComponent)