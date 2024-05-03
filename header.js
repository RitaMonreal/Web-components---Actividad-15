class Header extends HTMLElement{
    constructor(){
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


    render() {
        this.shadow.innerHTML = `
        <div class="contenedor-header">
        <div class="header-gris">
            <div class="contenedor-informacion-contacto">
                <div class="contenedor-flex">
                    <div class="contenedor-info">
                        <mi-icono icono="far fa-envelope" background-color="#706f6f" border-radius="50"></mi-icono>
                        <span class="especificacion-icono">Correo</span>
                    </div>
                    <div class="contenedor-info">
                        <mi-icono icono="fas fa-phone-alt" background-color="#706f6f" border-radius="50"></mi-icono>
                        <span class="especificacion-icono">Directorio</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-azul">
                <div class="contenedor-logos">
                    <mi-logo background-image="./assets/logo-uaslp.png"></mi-logo>
                    <span class="divider"></span>
                    <mi-logo background-image="./assets/logo-ingenieria.png"></mi-logo>
                </div>
                <div class="contenedor-perfiles">
                <mi-ancla texto="Aspirantes"></mi-ancla>
                    <span> | </span>
                    <mi-ancla texto="Estudiantes"></mi-ancla>
                    <span> | </span>
                    <mi-ancla texto="Egresados"></mi-ancla>
                    <span> | </span>
                    <mi-ancla texto="Docentes"></mi-ancla>
                    <span> | </span>
                    <mi-ancla texto="Administrativos"></mi-ancla>
                </div>
        </div>
    </div>
    <div class="adorno-contenedor">
    </div>
    `;
    }
}

customElements.define('mi-header', Header);
