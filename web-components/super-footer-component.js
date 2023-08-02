class SuperFooterComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }


    connectedCallback(){

        this.shadowRoot.innerHTML = '<p>Niente diritti, pussa via</p>'
        this.render();
    }

    render(){
        
        this.shadowRoot.innerHTML =  `
        <link rel="stylesheet" href="./web-components/super-footer-style.css">
        <p>AAAAAAAAAAAAAAAAAAA</p>`
    }

}

customElements.define('super-footer', SuperFooterComponent);

