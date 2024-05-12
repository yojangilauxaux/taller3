const productos = [
  {
    id: 1,
    nombre: "televisor",
    descripcion: "LG - 32 Pulgadas",
    valor: 10000,
    cantidad: 12,
  },
  {
    id: 2,
    nombre: "xbox 360",
    descripcion: "Consola de videojuegos",
    valor: 120000,
    cantidad: 5,
  },
  {
    id: 3,
    nombre: "iphone x",
    descripcion: "iphone x, 256 g de espacio y 4g ram",
    valor: 500000,
    cantidad: 12,
  },
  {
    id: 4,
    nombre: "portatil hp",
    descripcion:
      "portatil con huella digital, 8g ram, 500g de espacio y procesador rayzen5",
    valor: 200000,
    cantidad: 7,
  },
  {
    id: 5,
    nombre: "balon de futbol",
    descripcion: "Balon del real madrid en goma",
    valor: 2311,
    cantidad: 12,
  },
];

let carrito = [];
let totalVenta = 0;
let contadorVentas = 0;

function mostrarProductos() {
  console.log("Productos disponibles:");
  productos.forEach((producto) => {
    console.log(
      `ID: ${producto.id}, Nombre: ${producto.nombre}, Descripción: ${producto.descripcion}, Valor: ${producto.valor}`
    );
  });
}

function realizarVenta() {
  contadorVentas++;

  console.log(`Total de la venta: $${totalVenta}`);
}

function agregarAlCarritoPorNombre(nombreProducto) {
  const producto = productos.find(
    (producto) => producto.nombre === nombreProducto
  );
  if (!producto) {
    console.log("Producto no encontrado.");
    return;
  }

  if (producto.cantidad === 0) {
    console.log("No hay suficiente cantidad disponible de este producto.");
    return;
  }

  carrito.push({ ...producto, cantidad: 1 });
  producto.cantidad--;
  totalVenta += producto.valor;
  console.log(`"${producto.nombre}" agregado al carrito.`);
}

function agregarAlCarrito(idProducto) {
  const producto = productos.find((producto) => producto.id === idProducto);
  if (!producto) {
    console.log("Producto no encontrado.");
    return;
  }

  const productoEnCarrito = carrito.find((item) => item.id === idProducto);
  if (productoEnCarrito) {
    if (producto.cantidad === 0) {
      console.log("No hay suficiente cantidad disponible de este producto.");
      return;
    }
    productoEnCarrito.cantidad++;
    producto.cantidad--;
    totalVenta += producto.valor;
    console.log(
      `Se incrementó la cantidad de "${producto.nombre}" en el carrito.`
    );
  } else {
    if (producto.cantidad === 0) {
      console.log("No hay suficiente cantidad disponible de este producto.");
      return;
    }
    carrito.push({ ...producto, cantidad: 1 });
    producto.cantidad--;
    totalVenta += producto.valor;
    console.log(`"${producto.nombre}" agregado al carrito.`);
  }
}


mostrarProductos();


const nombreSeleccionado = prompt(
  "Ingrese el nombre del producto que desea agregar al carrito: "
);
agregarAlCarritoPorNombre(nombreSeleccionado);

const idSeleccionado = parseInt(
  prompt("Ingrese el ID del producto que desea agregar al carrito: ")
);
agregarAlCarrito(idSeleccionado);

realizarVenta();
console.log(`Ventas totales realizadas hoy: ${contadorVentas}`);
