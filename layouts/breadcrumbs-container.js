class BreadcrumbsContainer extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();

        const layout = document.createElement('link');
        const global = document.createElement('link');

        layout.setAttribute('rel', 'stylesheet');
        layout.setAttribute('href', './styles/layout.css');
        global.setAttribute('rel', 'stylesheet');
        global.setAttribute('href', './styles/global.css');
        this.shadow.appendChild(layout);
        this.shadow.appendChild(global);
    }

    static get observedAttributes() {
        return ['items'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'items') {
            this.render();
        }
    }

    render() {
        const items = JSON.parse(this.getAttribute('items'));
        let breadcrumbsHTML = '';

        items.forEach((item, index) => {
            breadcrumbsHTML += `<mi-breadcrumb texto="${item}"></mi-breadcrumb>`;
        });

        this.shadow.innerHTML = `
            <div class="contenedor-breadcrumbs">
                ${breadcrumbsHTML}
            </div>
        `;
    }
}

customElements.define('breadcrumb-container', BreadcrumbsContainer);
