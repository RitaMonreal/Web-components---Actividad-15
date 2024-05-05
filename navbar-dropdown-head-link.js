class NavbarDropdownHead extends HTMLElement {
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
        const texto = this.getAttribute('texto') || 'Texto predeterminado';
        this.shadow.innerHTML = `
        <style>
            .contenedor-option-dropdown{
                height: 50px;
                margin-right: 10px;
                background-color: white;
                color:  #004A98;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                padding: 0px 10px;
            }

            .contenedor-option-dropdown:hover{
                background-color: #004A98;
                color: white;
            }

            .contenedor-option-dropdown a{
                padding: 10px;
                height: auto;
                width: auto;
                font-size: 20px;
                font-weight:600;
            }

        </style>
        <div class="contenedor-option-dropdown">
            <a>${texto}</a>
            <i class="fas fa-caret-down"></i>
        </div>
        `;
    }
}

customElements.define('mi-dropdown-head', NavbarDropdownHead);
