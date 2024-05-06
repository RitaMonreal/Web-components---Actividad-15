class NavbarDropdownHead extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.isOpen = false; // Variable para saber el estado del dropdown
    }

    connectedCallback() {
        this.render();

        const link = document.createElement('link');//iconos
        const component = document.createElement('link');//componentes
        const global = document.createElement('link');//global
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        component.setAttribute('rel', 'stylesheet');
        component.setAttribute('href', './styles/component.css');
        global.setAttribute('rel', 'stylesheet');
        global.setAttribute('href', './styles/global.css');
        this.shadow.appendChild(link);
        this.shadow.appendChild(component);
        this.shadow.appendChild(global);

        this.shadow.querySelector('.contenedor-option-dropdown').addEventListener('click', () => {
            this.toggleDropdown(); 
        });
    }

    static get observedAttributes() {
        return ['texto', 'items'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'texto' || name === 'items') {
            this.render();
        }
    }

    toggleDropdown() {
        // Obtener los elementos hijos del dropdown (items dropdown)
        const dropdownItems = this.shadow.querySelector('.contenedor-items');

        // Alternar el estado del dropdown
        this.isOpen = !this.isOpen;

        // Mostrar u ocultar los elementos del dropdown según el estado actual
        dropdownItems.classList.toggle('show', this.isOpen);
    }


    render() {
        const texto = this.getAttribute('texto') || 'Texto predeterminado';
        const dropdownItems = this.getAttribute('items') ? JSON.parse(this.getAttribute('items')) : []; // Obtener los elementos del dropdown

        let itemsHTML = ''; // Variable para almacenar el HTML de los items dropdown

        // Crear el HTML de los items dropdown
        dropdownItems.forEach(item => {
            itemsHTML += `<div class="contenedor-item-dropdown"><mi-dropdown-item texto="${item}"></mi-dropdown-item></div>`;
        });

        this.shadow.innerHTML = `
        <div class="contenedor-option-dropdown">
            <a>${texto}</a>
            <i class="fas fa-caret-down"></i>
        </div>
        <div class="contenedor-items">
            ${itemsHTML} 
        </div>
        `;
    }
}

customElements.define('mi-dropdown-head', NavbarDropdownHead);