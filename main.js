//TERCERA ENTREGA PROYECTO FINAL JS
//ECOMMERCE



const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "./img/id-1.jpeg",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "./img/id-2.jpeg",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "./img/id-3.jpeg",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "./img/id-5.jpeg",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "./img/id-6.jpeg",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen:"./img/id-7.jpeg",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "./img/id-8.jpeg",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "./img/id-10.jpeg",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];


//guardo el NODO PADRE en una variable
const contenedorDeProductos = document.querySelector("#productos-container");


//hacer las tarjetas
const generarTarjetas = array => {
    const cards = array.reduce((acc, element) =>{
       return acc + `
       <div class="card" id="card-${element.id}">
           <h2> 
           Producto: ${element.producto} 
           </h2>
   
           <h3> 
           Marca: ${element.marca} 
           </h3>
   
           <h3> 
           Precio: ${element.precio} 
           </h3>

            <figure class"container-card">
                <img class="imagenes" src=${element.imagen || "./img/not-found.jpg"} alt=${element.name}
            </figure>

           <p> 
           ${element.descripcion}
           </p>

           <button class="button-card" id= button-${element.id}">
                <i class="fa-solid fa-2xl fa-cart-shopping"></i>
           </button>

        </div>
       `
   },"");
   contenedorDeProductos.innerHTML = cards
};

//concluir el proceso de crear las cartas e impactarlas en HTML llamando a función
generarTarjetas(productos); 




//llamo todas las tarjetas que hice

const allCards = document.querySelectorAll(".button-card");
console.log(allCards);

let carritoDeCompras = [];

//ligo elemento a la nodelist
//1. funcon que me permita recorrer los nodos

const eventoCards = (nodos, array) => {

    for (let i = 0; i < nodos.length; i++){

        nodos[i].onclick = (e) =>{
            
            const id = e.currentTarget.id.slice(7,8);

            const buscarProducto = array.find(element => element.id === Number(id));

            carritoDeCompras.push(buscarProducto);
            //console.log(carritoDeCompras);

            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
        };
    };
};
eventoCards(allCards, productos)

//Prueba Github
//prueba 0007