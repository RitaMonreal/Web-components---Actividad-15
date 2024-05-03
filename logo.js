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
