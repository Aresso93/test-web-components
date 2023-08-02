class SlasherListComponent extends HTMLElement{

constructor(){

    super();
    this.attachShadow({mode: 'open'});

    }


    connectedCallback(){

        fetch('./slasher-villains.json')
        .then(resp => resp.json())
        .then(res => this.render(res));
    }


    render(villains){

        this.shadowRoot.innerHTML = '';
        const mainContainer = document.createElement('div');
        this.shadowRoot.appendChild(mainContainer);

        for (let i = 0; i < villains.length; i++) {
            const villain = villains[i];
            
            const cardComponent = document.createElement('slasher-card');
            cardComponent.setAttribute('slasher-name', villain.name);
            mainContainer.appendChild(cardComponent);
        }

    }


}

customElements.define('slashers-list', SlasherListComponent);