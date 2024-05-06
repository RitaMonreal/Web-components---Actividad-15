class Breadcrumb extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();

        const link = document.createElement('link');
        const component = document.createElement('link');
        const global = document.createElement('link');

        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        component.setAttribute('rel', 'stylesheet');
        component.setAttribute('href', './styles/component.css');
        global.setAttribute('rel', 'stylesheet');
        global.setAttribute('href', './styles/global.css');

        this.shadow.appendChild(link);
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
        const texto = this.getAttribute('texto');
        this.shadow.innerHTML = `
        <div class="contenedor-breadcrumb">
            <span>${texto}</span>
            <i class="fas fa-angle-right"></i>
        </div>
        `;
    }
}

customElements.define('mi-breadcrumb', Breadcrumb);
