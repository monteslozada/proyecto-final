// Obtener referencia al formulario
const formulario = document.querySelector('form');

// Obtener referencia a los elementos del formulario
const opciones = formulario.opciones;
const lanzamiento = formulario.lanzamiento;
const cambio = formulario.cambio;

// Obtener referencia al contenedor donde se mostrarán los juegos
const contenedorJuegos = document.getElementById('juegos');

// Cargar el archivo JSON con los juegos
fetch('./js/productos.json')
  .then(response => response.json())
  .then(juegos => {
    // Escuchar el evento click del botón "enviar"
    cambio.addEventListener('click', () => {
      // Obtener la consola seleccionada y el año de lanzamiento ingresado por el usuario
      const consola = opciones.value;
      const anio = parseInt(lanzamiento.value);

      // Filtrar los juegos compatibles con la consola y el año de lanzamiento especificados
      const juegosFiltrados = juegos.filter(juego => juego.categoria.id === consola && (!juego.categoria.lanzamiento || juego.categoria.lanzamiento === lanzamiento));

      // Limpiar el contenedor de juegos
      contenedorJuegos.innerHTML = '';

      // Mostrar los juegos compatibles
      if (juegosFiltrados.length > 0) {
        juegosFiltrados.forEach(juego => {
          const div = document.createElement('div');
          div.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.titulo}">
            <h3>${juego.titulo}</h3>
            <p>Precio: ${juego.precio}</p>
          `;
          contenedorJuegos.appendChild(div);
        });
      } else {
        contenedorJuegos.innerHTML = '<p>No se encontraron juegos compatibles.</p>';
      }
    });
  })
  .catch(error => console.log(error));


  const resultadosDiv = document.getElementById("resultados");

// Crea un elemento h2 con el título de la búsqueda
const titulo = document.createElement("h2");
titulo.textContent = `Resultados para "${categoria}" lanzados en ${lanzamiento}`;
resultadosDiv.appendChild(titulo);

// Crea una lista ul para mostrar los juegos encontrados
const lista = document.createElement("ul");

// Recorre los juegos y agrega un li para cada uno
juegos.forEach(juego => {
  const li = document.createElement("li");
  li.textContent = juego.titulo;
  lista.appendChild(li);
});

resultadosDiv.appendChild(lista);
