class Card extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    static get observedAttributes() {
        return ['fecha-evento', 'titulo-evento'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
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


    render() {
        const backgroundImage = this.getAttribute('background-image');
        const fechaEvento = this.getAttribute('fecha-evento');
        const tituloEvento = this.getAttribute('titulo-evento');
        this.shadow.innerHTML = `
        <style>
        .card-imagen{
            background-image: url('${backgroundImage}');
        }

        </style>
            <div class="contenedor-card">
                <div class="card-imagen"></div>
                <div class="card-body">
                    <div class="dia-evento">
                        <span class="fondo-dia-evento">${fechaEvento}</span>
                    </div>
                    <div class="titulo-evento">
                        ${tituloEvento}
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('mi-card', Card);
