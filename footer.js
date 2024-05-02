class Footer extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    render() {
        this.shadow.innerHTML = `
        <div class="contenedor-footer">
            <div class="adorno-superior-footer"></div>
            <div class="informacion-footer">
                <div class="container-general">
                    <div class="izquierdo-footer">
                        <div class="redes-sociales">
                            <mi-icono icono="fab fa-facebook-square"></mi-icono>
                            <mi-icono icono="fab fa-twitter"></mi-icono>
                            <mi-icono icono="fab fa-youtube"></mi-icono>
                            <mi-icono icono="fab fa-instagram"></mi-icono>
                        </div>
                        <div class="contenedor-informacion">
                            <span>FI</span>
                            <br>
                            <span>Facultad de Ingeniería</span>
                            <br>
                            <span>Dr. Manuel Nava No. 8, Zona Universitaria Poniente, C.P. 78290</span>
                            <br>
                            <span>San Luis Potosí, San Luis Potosí</span>
                            <br>
                            <span>444 826 2330</span>
                            <br>
                            <span>©2024 Todos los derechos reservados</span>
                            <br>
                        </div>
                    </div>
                    <div class="derecho-footer">
                        <div class="contenedor-ancla">
                            <a href="">Inicio</a>
                        </div>
                        <div class="contenedor-ancla">
                            <a href="">Facultad</a>
                        </div>
                        <div class="contenedor-ancla">
                            <a href="">Comunidad</a>
                        </div>
                        <div class="contenedor-ancla">
                            <a href="">Oferta educativa</a>
                        </div>
                        <div class="contenedor-ancla">
                            <a href="">Áreas</a>
                        </div>
                        <div class="contenedor-ancla">
                            <a href="">Departamentos</a>
                        </div>
                        <div class="contenedor-ancla">
                            <a href="">Investigación</a>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    `;
    }
}

customElements.define('mi-footer', Footer);
