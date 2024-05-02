class Ancla extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
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
                .contenedor-ancla{
                    height: 30px;
                }
                .contenedor-ancla a{
                    color: white;
                    text-decoration: none;
                    height: auto;
                    width: auto;
                    font-size: 20px;
                    font-weight: 600;
                }
                
                .contenedor-ancla a:hover{
                    text-decoration:underline;
                }
            </style>
            <div class="contenedor-ancla">
                <a href="" class="texto-ancla" id='texto-ancla'>${texto}</a>
            </div> 
        `;
    }
}

customElements.define('mi-ancla', Ancla);

