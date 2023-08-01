class SlasherCardComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});

    }

    connectedCallback(){
        this.render();
    }


    render(){

        const name = this.getAttribute('slasher-name');
        this.shadowRoot.innerHTML = '';
        const div = document.createElement('div');
        this.shadowRoot.appendChild(div);

        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(name));

        div.appendChild(h3);
    }

}

customElements.define('slasher-card', SlasherCardComponent);