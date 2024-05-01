class Icono extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    
    static get observedAttributes() {
        return ['icono'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'icono') {
            this.render(newValue);
        }
    }

    connectedCallback() {
        const icono = this.getAttribute('icono');
        this.render(icono);

        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        this.shadow.appendChild(link);
    }


    render(icono) {
        this.shadow.innerHTML = `
        <style>
            .contenedor-icono {
                background-color: blue;
                font-size: 30px;
                height: 30px;
                width: 30px;
                color: #FFFFFF;
            }
        </style>
        <div class="contenedor-icono">
            <i class="${icono}" id='icono'></i>
        </div>
        `;
    }
}

customElements.define('mi-icono', Icono);
