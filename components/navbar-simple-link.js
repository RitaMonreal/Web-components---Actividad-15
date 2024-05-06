class NavbarLink extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }


    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();

        const component = document.createElement('link');
        const global = document.createElement('link');
        component.setAttribute('href', 'styles.css');
        component.setAttribute('href', './styles/component.css');
        global.setAttribute('href', 'styles.css');
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
        const texto = this.getAttribute('texto') || 'Texto predeterminado';
        this.shadow.innerHTML = `
        <div class="contenedor-option-simple">
            <a>${texto}</a>
        </div>
        `;
    }
}

customElements.define('mi-navbar-link', NavbarLink);
