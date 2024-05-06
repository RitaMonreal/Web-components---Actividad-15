class Ancla extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();

        const component = document.createElement('link');
        const global = document.createElement('link');
        component.setAttribute('rel', 'stylesheet');
        component.setAttribute('href', './styles/component.css');
        global.setAttribute('rel', 'stylesheet');
        global.setAttribute('href', './styles/global.css');
        this.shadow.appendChild(component);
        this.shadow.appendChild(global);
    }

    static get observedAttributes() {
        return ['texto'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'texto') {
            this.render();
        }
    }

    render() {
        const texto = this.getAttribute('texto') || 'Ancla';
        this.shadow.innerHTML = `
            <div class="contenedor-ancla">
                <a href="" class="texto-ancla" id='texto-ancla'>${texto}</a>
            </div> 
        `;
    }
}

customElements.define('mi-ancla', Ancla);

