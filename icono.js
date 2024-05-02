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
        const link2 = document.createElement('link')
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'styles.css');
        this.shadow.appendChild(link);
        this.shadow.appendChild(link2);
    }


    render(icono) {
        this.shadow.innerHTML = `
        <div class="contenedor-icono">
            <i class="${icono}" id='icono'></i>
        </div>
        `;
    }
}

customElements.define('mi-icono', Icono);
