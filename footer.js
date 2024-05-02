class Footer extends HTMLElement{
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
        <style>
            .contenedor-footer{
                height: 290px;
                width: 100vw;
                background-color: antiquewhite;
            }
            .adorno-superior-footer{
                height: 10px;
                width: 100%;
                background-color: #0DCAF0;
            }
            .informacion-footer{
                height: 225px;
                width: 100%;
                background-color: #004A98;
                color: white;
                padding: 25px 50px 30px 50px;
            }
            .redes-sociales{
                display: flex;
                
                height: 30px;
                width: 855px;
            }

            .izquierdo-footer{
                height: 210px;
                width: 90%;
                padding: 0px 15px;
            }

            .derecho-footer{
                width: 240px;
                height: 210px;
                padding: 0px 15px;
            }
            span{
                height: 27px;
                width: 825px;
                color: #FFFFFF;
                padding: 0px 15px;
                font-size: 18px;
                
            }
            .container-general{
                height: 210px;
                width: 80%;
                padding: 0px 15px;
                margin: 0px 54.44px;
                display: flex;
            }
        </style>
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
                        <mi-ancla texto="Inicio"></mi-ancla>
                        <mi-ancla texto="Facultad"></mi-ancla>
                        <mi-ancla texto="Comunidad"></mi-ancla>
                        <mi-ancla texto="Oferta educativa"></mi-ancla>
                        <mi-ancla texto="Áreas"></mi-ancla>
                        <mi-ancla texto="Departamentos"></mi-ancla>
                        <mi-ancla texto="Investigación"></mi-ancla>
                    </div>
                </div>
            
            </div>
        </div>
    `;
    }
}

customElements.define('mi-footer', Footer);
