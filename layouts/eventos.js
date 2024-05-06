class Evento extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();

        const link = document.createElement('link');
        const link2 = document.createElement('link')
        const global = document.createElement('link')
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


    render() {
        
        this.shadow.innerHTML = `
        <style>
            .contenedor-eventos{
                height: 490px;
                width: 100vw;
            }
            .titulo-eventos{
                text-align: center;
                color: #004a98;
            }
            h2{
                font-size: 45px;
            }
            .contenedor-general-cards{
                height: 420px;
                width: 1100px;
                background-color: #E6ECF2;
            }
            .contenedor-cards{
                height: 335px;
                width: 100%;
                display: flex;
            }
            
 
        </style>
        <div class="contenedor-eventos">
            <div class="titulo-eventos">
                <h2>EVENTOS</h2>
            </div>
            <div class="contenedor-general-cards">
                <div class="contenedor-cards">
                <mi-card background-image="./assets/barbie.png" fecha-evento="08 abr." titulo-evento="Velada Estelar: Barbieland"></mi-card>
                <mi-card background-image="./assets/eclipse.png" fecha-evento="22 abr." titulo-evento="Eclipse Solar Parcial:"></mi-card>
                <mi-card background-image="./assets/nasa.png" fecha-evento="15 abr." titulo-evento="Robotics and Autonomous Systems for Space"></mi-card>
                <mi-card background-image="./assets/proyecto.png" fecha-evento="07 abr." titulo-evento="20a. Expo Proyecto Integrador"></mi-card>
                </div>
               <mi-boton texto="Conocer más..."></mi-boton> 
            </div>
    </div>
        `;
    }
}

customElements.define('mi-evento', Evento);