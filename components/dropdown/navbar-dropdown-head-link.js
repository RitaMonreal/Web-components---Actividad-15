class NavbarDropdownHead extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.isOpen = false; // Variable para saber el estado del dropdown
    }

    connectedCallback() {
        this.render();

        const link = document.createElement('link');
        const link2 = document.createElement('link');
        const global = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'styles.css');
        global.setAttribute('rel', 'stylesheet');
        global.setAttribute('href', 'styles.css');
        this.shadow.appendChild(link);
        this.shadow.appendChild(link2);
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
        <style>
            .contenedor-option-dropdown {
                height: 50px;
                margin-right: 10px;
                background-color: white;
                color:  #004A98;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                padding: 0px 10px;
            }

            .contenedor-option-dropdown:hover {
                background-color: #004A98;
                color: white;
            }

            .contenedor-option-dropdown a {
                padding: 10px;
                height: auto;
                width: auto;
                font-size: 20px;
                font-weight:600;
            }

            .contenedor-items {
                display: none; /* Por defecto, ocultar los items del dropdown */
                position: absolute; /* Posicionamiento absoluto para que no afecte al layout */
                z-index: 1; /* Asegurar que los items estén por encima de otros elementos */
                background-color: white;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            }

            .contenedor-items.show {
                display: block; /* Mostrar los items del dropdown cuando está abierto */
            }
        </style>
        <div class="contenedor-option-dropdown">
            <a>${texto}</a>
            <i class="fas fa-caret-down"></i>
        </div>
        <div class="contenedor-items">
            ${itemsHTML} <!-- Insertar los items dropdown -->
        </div>
        `;
    }
}

customElements.define('mi-dropdown-head', NavbarDropdownHead);