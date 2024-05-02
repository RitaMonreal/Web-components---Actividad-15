class Ancla extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
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

