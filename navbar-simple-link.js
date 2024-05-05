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

        const link = document.createElement('link');
        const link2 = document.createElement('link')
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'styles.css');
        this.shadow.appendChild(link);
        this.shadow.appendChild(link2);
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
        <style>
            .contenedor-option-simple{
                height: 50px;
                margin-right: 10px;
                background-color: white;
                color:  #004A98;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
            }

            .contenedor-option-simple:hover{
                background-color: #004A98;
                color: white;
            }

            .contenedor-option-simple a{
                padding: 10px;
                height: auto;
                width: auto;
                font-size: 20px;
                font-weight:600;
            }
        </style>
        <div class="contenedor-option-simple">
            <a>${texto}</a>
        </div>
        `;
    }
}

customElements.define('mi-navbar-link', NavbarLink);
