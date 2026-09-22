// --- 1. LÓGICA DEL MENÚ DE NAVEGACIÓN ---
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#open_menu");
const cerrar = document.querySelector("#close_menu");

// Es buena práctica validar que existan antes de agregarles eventos
if (abrir && cerrar && nav) {
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () =>{
        nav.classList.remove("visible");
    });
}

// --- 2. BASE DE DATOS (Cartas) ---
const spotViaData = [
    {
        id: 1,
        title: "Coliseo de Ferias Manuel Victoria Rojas",
        location: "Cra. 30 #11-93 a 11-77",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cHhKWHDFIKf7abzxrYv_0uhuKsEDy3EcBJva7gxSp6HVICjMB_ZFR2vh&s=10",
        price: "$50.000",
        destacado: true
    },
    {
        id: 2,
        title: "Estadio Doce de Octubre",
        location: "Calle 40A # 23-44",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iiUKfQ1lylDzI0GwZdf_s2m57ggXK_GKFmSTY9ypB-PZkQF-PjU_KBe3&s=10",
        price: "$30.000",
        destacado: true
    },
    {
        id: 3,
        title: "Torneo de Voleiplaya UCEVA",
        location: "Cancha de arena UCEVA ",
        imageUrl: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500",
        price: "$10.000 / Equipo",
        destacado: true
    },
    {
        id: 4,
        title: "Polideportivo Alameda",
        location: "Calle 5 #24-45",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRA2wPzkdC3ISiP745ikVVhuRPdqQZVgSc2rz0QtFIEJa57ShfV-gDHDn&s=10",
        price: "$35.000 / hora",
        destacado: false
    },
    {
        id: 5,
        title: "Cawa",
        location: "Calle 40 A # 25 - 48",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OAz1OTyUCeAm6Y9Rk8lPCY6oajiWhOQc4wN_caisSXPKLr83dD7iFk0&s=10",
        price: "$200.000",
        destacado: false
    }
];

// --- 3. FUNCIÓN REUTILIZABLE PARA DIBUJAR TARJETAS ---
// Esta función reemplaza tu primer bloque DOMContentLoaded
function renderizarTarjetas(arregloDatos, contenedor) {
    const eventsHTML = arregloDatos.map(event => `
        <div class="event-card">
            <img src="${event.imageUrl}" alt="${event.title}" class="event-image">
            <div class="event-details">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-info-text">📍 ${event.location}</p>
                <p class="event-info-text">💰 ${event.price}</p>
                
                <button class="event-btn" data-id="${event.id}">
                    Inscribirse
                </button>
            </div>
        </div>
    `).join('');

    contenedor.innerHTML = eventsHTML;

    // Asignar interactividad
    const buttons = contenedor.querySelectorAll('.event-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (evento) => {
            const eventId = evento.target.getAttribute('data-id');
            participate(eventId);
        });
    });
}

// --- 4. LÓGICA DE PÁGINAS (ÚNICO DOMContentLoaded) ---
document.addEventListener('DOMContentLoaded', () => {
    const gridPrincipal = document.getElementById('eventsGrid'); 
    const gridReservas = document.getElementById('allReservationsGrid'); 

    // Página de Inicio (Solo destacados)
    if (gridPrincipal) {
        const eventosDestacados = spotViaData.filter(item => item.destacado === true);
        renderizarTarjetas(eventosDestacados, gridPrincipal);
    }

    // Página de Reservas (Todos los escenarios)
    if (gridReservas) {
        renderizarTarjetas(spotViaData, gridReservas);
    }
});

// --- 5. FUNCIÓN DE RESERVA ---
function participate(eventId) {
    console.log(`Procesando reserva para el evento ID: ${eventId}`);
    alert(`Redirigiendo a la inscripción del evento número ${eventId}.`);
}