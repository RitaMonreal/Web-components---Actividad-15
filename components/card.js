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

        const link = document.createElement('link');
        const link2 = document.createElement('link')
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'styles.css');
        this.shadow.appendChild(link);
        this.shadow.appendChild(link2);
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
