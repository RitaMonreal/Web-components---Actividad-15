class Icono extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }
    /*icono: tipo de icono de font awesome*/
    get icono(){
        return this.getAttribute('icono');
    }

    set icono(val){
        this.setAttribute('icono', val);
    }

    /*backgroundColor: color de fondo del contenedor*/
    get backgroundColor(){
        return this.getAttribute('background-color');
    }

    set backgroundColor(val){
        this.setAttribute('background-color', val);
    }

    get borderRadius(){
        return this.getAttribute('border-radius');
    }

    set borderRadius(val){
        this.setAttribute('border-radius', val);
    }

    
    static get observedAttributes() {
        return ['icono', 'background-color', 'border-radius'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
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
        <style>
            .contenedor-icono{
                background-color: ${this.backgroundColor};
                border-radius: ${this.borderRadius}px;
            }
        </style>
        <div class="contenedor-icono">
            <i class="${icono}" id='icono'></i>
        </div>
        `;
    }
}

customElements.define('mi-icono', Icono);
