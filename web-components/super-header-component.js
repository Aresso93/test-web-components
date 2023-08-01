class SuperHeaderComponent extends HTMLElement {

constructor(){
    super()
    this.attachShadow({mode: "open"});

}

connectedCallback(){
const style = document.createElement("style");
style.innerHTML = `h1{color: ${this.getAttribute('title-color')}}`
this.shadowRoot.appendChild(style);

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode(this.getAttribute('super-title')));
const page2Link = document.createElement('a');
page2Link.href = './page2.html';
page2Link.appendChild(document.createTextNode('Page 2 of our slasher website'))
this.shadowRoot.appendChild(page2Link);
this.shadowRoot.appendChild(h1);
}








}

customElements.define('super-header', SuperHeaderComponent);