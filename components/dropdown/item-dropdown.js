class NavbarItemDropdown extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }


    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();

        const component = document.createElement('link');//Componentes
        const global = document.createElement('link');//Global
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
        const texto = this.getAttribute('texto') || 'Item dropdown';
        this.shadow.innerHTML = `
        <div class="contenedor-item-dropdown">
            <a>${texto}</a>
        </div>
        `;
    }
}

customElements.define('mi-dropdown-item', NavbarItemDropdown);
