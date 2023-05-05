// Obtener los elementos del formulario
const opciones = document.getElementById("opciones");
const lanzamiento = document.getElementsByName("lanzamiento")[0];
const botonEnviar = document.getElementById("cambio");

// Cargar el archivo JSON de productos
const url = "productos.json";
let productos = [];

fetch('./js/productos.json')
    .then((response) => response.json())
    .then((data) => {
        productos = data;
    })
    .catch((error) => {
        console.log("Error al cargar los productos", error);
    });

// Agregar un event listener al botón de enviar
botonEnviar.addEventListener("click", (e) => {
    e.preventDefault()
    // Obtener los valores del formulario
    const consola = opciones.value;
    const lanz = parseInt(lanzamiento.value);

    // Filtrar los productos compatibles
    const juegosCompatibles = productos.filter((producto) => {
        return producto.categoria.id === consola && producto.categoria.lanzamiento === lanz;
    });

    // Generar las tarjetas de los juegos compatibles
    let juegosHTML = "";
    juegosCompatibles.forEach((juego) => {
        juegosHTML += `
        <divclass="producto-detalles">
          <img class="producto-imagen" src="${juego.imagen}" alt="${juego.titulo}" />
          <h3>${juego.titulo}</h3>
          <p>Categoría: ${juego.nombre}</p>
          <p>cambio: ${juego.cambio}</p>
        </div>
      `;


    });

    // Agregar las tarjetas al div de juegos
    const juegosDiv = document.getElementById("cambio");
    juegosDiv.innerHTML = juegosHTML;
});








