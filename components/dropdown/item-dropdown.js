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

        const link = document.createElement('link');
        const link2 = document.createElement('link');
        const global = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'styles.css');
        global.setAttribute('rel', 'stylesheet');
        global.setAttribute('href', './styles/global.css');
        this.shadow.appendChild(link);
        this.shadow.appendChild(link2);
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
        <style>
            .contenedor-item-dropdown{
                padding: 5px 20px;
                height: 30px;
                width: 100%;
                background-color: white;
                display: flex;
                align-items: center;
                white-space: nowrap;
            }

            .contenedor-item-dropdown:hover{
                background-color: #004A98;
                color: white;
            }

        </style>
        <div class="contenedor-item-dropdown">
            <a>${texto}</a>
        </div>
        `;
    }
}

customElements.define('mi-dropdown-item', NavbarItemDropdown);
