class Evento extends HTMLElement {
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
        global.setAttribute('rel', '.stylesheet');
        global.setAttribute('href', './styles/global.css');
        this.shadow.appendChild(layout);
        this.shadow.appendChild(global);
    }


    render() {
        
        this.shadow.innerHTML = `
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
