document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. VARIABLES ---
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#open_menu");
    const cerrar = document.querySelector("#close_menu");
    const botonesNavegacion = document.querySelectorAll('.go-reserva');
    const botonesFiltro = document.querySelectorAll('.filtro-btn');

    botonesFiltro.forEach(boton => {
    boton.addEventListener("click", (evento) => {
        
        botonesFiltro.forEach(b => b.classList.remove("select"));

        evento.currentTarget.classList.add("select");
    });
});
   

    // --- 2. MENÚ LATERAL (Protegido con condicionales limpios) ---
    if (abrir && nav) {
        abrir.addEventListener("click", () => {
            nav.classList.add("visible");
        });
    }

    if (cerrar && nav) {
        cerrar.addEventListener("click", () => {
            nav.classList.remove("visible");
        });
    }

    // --- 3. REDIRECCIÓN DE BOTONES ---
    if (botonesNavegacion.length > 0) {
        botonesNavegacion.forEach(boton => {
            boton.addEventListener('click', (evento) => {
                const urlDestino = evento.currentTarget.getAttribute('data-url');
                if (urlDestino) {
                    window.location.href = urlDestino;
                }
            });
        });
    }

    // --- 4. BASE DE DATOS (Cartas) ---
    const spotViaData = [
        {
            id: 1,
            title: "Coliseo de Ferias Manuel Victoria Rojas",
            location: "Cra. 30 #11-93 a 11-77",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cHhKWHDFIKf7abzxrYv_0uhuKsEDy3EcBJva7gxSp6HVICjMB_ZFR2vh&s=10",
            price: "$50.000",
            destacado: true,
            categoria: "Eventos"
        },
        {
            id: 2,
            title: "Estadio Doce de Octubre",
            location: "Calle 40A # 23-44",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iiUKfQ1lylDzI0GwZdf_s2m57ggXK_GKFmSTY9ypB-PZkQF-PjU_KBe3&s=10",
            price: "$30.000",
            destacado: true,
            categoria: "Deportes"
        },
        {
            id: 3,
            title: "Torneo de Voleiplaya UCEVA",
            location: "Cancha de arena UCEVA ",
            imageUrl: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500",
            price: "$10.000 / Equipo",
            destacado: true,
            categoria: "Deportes"
        },
        {
            id: 4,
            title: "Polideportivo Alameda",
            location: "Calle 5 #24-45",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRA2wPzkdC3ISiP745ikVVhuRPdqQZVgSc2rz0QtFIEJa57ShfV-gDHDn&s=10",
            price: "$35.000 / hora",
            destacado: false,
            categoria: "Deportes"
        },
        {
            id: 5,
            title: "Cawa",
            location: "Calle 40 A # 25 - 48",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OAz1OTyUCeAm6Y9Rk8lPCY6oajiWhOQc4wN_caisSXPKLr83dD7iFk0&s=10",
            price: "$200.000",
            destacado: true,
            categoria: "Restaurantes" 
        }
    ];

    // --- 5. RENDERIZADO DE TARJETAS ---
    function renderizarTarjetas(arregloDatos, contenedor) {
        const eventsHTML = arregloDatos.map(event => `
            <div class="event-card" data-id="${event.id}">
                <img src="${event.imageUrl}" alt="${event.title}" class="event-image">
                <div class="event-details">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-info-text">📍 ${event.location}</p>
                    <p class="event-info-text">💰 ${event.price}</p>
                    <p class="event-info-text">🏷️ ${event.categoria}</p>
                </div>
            </div>
        `).join('');

        contenedor.innerHTML = eventsHTML;
        
        const cards = contenedor.querySelectorAll('.event-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const eventId = card.getAttribute('data-id');
                participate(eventId);
            });
        });
    }   

    // --- 6. ASIGNACIÓN A LOS CONTENEDORES Y LÓGICA DE FILTROS ---
    const gridPrincipal = document.getElementById('eventsGrid'); 
    const gridReservas = document.getElementById('allReservationsGrid'); 

    // Si estamos en la página principal (Index)
    if (gridPrincipal) {
        const eventosDestacados = spotViaData.filter(item => item.destacado === true);
        renderizarTarjetas(eventosDestacados, gridPrincipal);
    }
    
    // Si estamos en la página de reservas
    if (gridReservas) {
        // Renderizamos todas las tarjetas al cargar la página por primera vez
        renderizarTarjetas(spotViaData, gridReservas);

        // Activamos los botones de filtro
        const botonesFiltro = document.querySelectorAll('.filtro-btn');

        if (botonesFiltro.length > 0) {
            botonesFiltro.forEach(boton => {
                boton.addEventListener('click', (evento) => {
                    
                    // 1. Quitar la clase 'active' de todos los botones y ponerla al que clickeamos
                    botonesFiltro.forEach(btn => btn.classList.remove('active'));
                    const botonSeleccionado = evento.currentTarget;
                    botonSeleccionado.classList.add('active');

                    // 2. Leer qué categoría queremos buscar (ej: "Deportes")
                    const categoriaFiltro = botonSeleccionado.getAttribute('data-filter');
                    
                    // 3. Filtrar los datos
                    let datosFiltrados = [];
                    if (categoriaFiltro === 'todos') {
                        datosFiltrados = spotViaData; // Mostrar todo
                    } else {
                        datosFiltrados = spotViaData.filter(lugar => lugar.categoria === categoriaFiltro);
                    }

                    // 4. Dibujar las tarjetas que pasaron el filtro
                    renderizarTarjetas(datosFiltrados, gridReservas);
                });
            });
        }
    }

    // --- 7. REDIRECCIÓN A RESERVA ---
    function participate(eventId) {
        console.log(`Procesando reserva para el lugar ID: ${eventId}`);
        localStorage.setItem('idLugarSeleccionado', eventId);
        window.location.href = 'reserva_form.html'; 
    }
});