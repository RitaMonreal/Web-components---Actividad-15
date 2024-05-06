class Logo extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
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
        this.shadow.innerHTML = `
        <style>
            .logo{
                background-image: url('${backgroundImage}');
            }
        </style>
        <div class="logo">

        </div>
        `;
    }
}

customElements.define('mi-logo', Logo);
