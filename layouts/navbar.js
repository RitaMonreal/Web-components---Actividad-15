class Navbar extends HTMLElement {
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
        const link2 = document.createElement('link');
        const global = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
        link2.setAttribute('rel', 'stylesheet');
        link2.setAttribute('href', 'styles.css');
        global.setAttribute('rel', 'stylesheet');
        global.setAttribute('href', './styles/global.css');
        this.shadow.appendChild(link);
        this.shadow.appendChild(link2);
        this.shadow.appendChild(global);
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
        const texto = this.getAttribute('texto') || 'Item dropdown';
        this.shadow.innerHTML = `
        <div class="navbar">
        <div class="navbar-container">
            <div class="navbar-options">
                <mi-navbar-link texto="Inicio"></mi-navbar-link>
                <mi-dropdown-head texto="Facultad" items='["Agenda y Calendarios", "Buzón de Quejas SICAL", "Directorio", "Historia", "Identidad", "Normativa", "Transparencia"]'></mi-dropdown-head>
                <mi-dropdown-head texto="Comunidad" items='["Estudiantes", "Docentes", "Egresados", "Administrativos"]'></mi-dropdown-head>
                <mi-navbar-link texto="Oferta educativa"></mi-navbar-link>
                <mi-dropdown-head texto="Áreas" items='["Agroindustrial", "Ciencias de la Computación", "Ciencias de la Tierra", "Civil", "Formación Humanística", "Mecánica Eléctrica", "Metalurgia y materiales", "Centro de Investigación y Estudios de Posgrado", "Centro de Capacitación en Ingeniería de Materiales"]'></mi-dropdown-head>
                <mi-dropdown-head texto="Departamentos" items='["Atención Psicológica", "Difusión y Divulgación", "Educación continua", "Relaciones internacionales", "Servicio social y Prácticas Profesionales", "Vehículos y Prácticas Escolares","Vinculación"]'></mi-dropdown-head>
                <mi-dropdown-head texto="Investigación" items='["Investigación","Posgrados"]'></mi-dropdown-head>
            </div>
            <div class="navbar-search">
                <form class="formulario-horizontal">
                    <div class="form-group">
                        <input type="text" class="form-control">
                    </div>
                    <div class="boton-buscar">
                        <i class="fas fa-search"></i>
                    </div>
                </form>
            </div>
        </div>
    </div>
        `;
    }
}

customElements.define('mi-navbar', Navbar);
