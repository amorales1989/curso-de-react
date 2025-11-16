export const products = [
  {
    id: 1,
    titulo: "Colchon 1 plaza",
    imagen: "/ensueño.png",
    precio: 25300,
    categoria: "hogar",
    descripcion: "Colchón de alta calidad, perfecto para descanso. Materiales premium y diseño ergonómico.",
    stock: 10
  },
  {
    id: 2,
    titulo: "Detergente en gel",
    imagen: "/detergente.jpg",
    precio: 1200,
    categoria: "limpieza",
    descripcion: "Detergente en gel concentrado, eficaz para todo tipo de ropa. Rinde hasta 40 lavados.",
    stock: 25
  },
  {
    id: 3,
    titulo: "Pintura asfáltica",
    imagen: "/indulacpaint2.svg",
    precio: 5900,
    categoria: "construccion",
    descripcion: "Pintura asfáltica de alta resistencia, ideal para techos y superficies exteriores. Protección duradera contra la humedad.",
    stock: 15
  },
  {
    id: 4,
    titulo: "Sofá 3 plazas",
    imagen: "/ensueño.png",
    precio: 45000,
    categoria: "hogar",
    descripcion: "Sofá cómodo y elegante, tapizado en tela de alta calidad. Perfecto para salas de estar.",
    stock: 5
  },
  {
    id: 5,
    titulo: "Lavandina concentrada",
    imagen: "/detergente.jpg",
    precio: 800,
    categoria: "limpieza",
    descripcion: "Lavandina concentrada, desinfectante y blanqueador. Ideal para limpieza profunda.",
    stock: 30
  },
  {
    id: 6,
    titulo: "Cemento portland",
    imagen: "/indulacpaint2.svg",
    precio: 3500,
    categoria: "construccion",
    descripcion: "Cemento portland de alta resistencia, ideal para construcción y reparaciones.",
    stock: 20
  }
];

export const getProducts = (categoria = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoria) {
        const productosFiltrados = products.filter(
          (producto) => producto.categoria === categoria
        );
        resolve(productosFiltrados);
      } else {
        resolve(products);
      }
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = products.find((p) => p.id === parseInt(id));
      if (producto) {
        resolve(producto);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 1000);
  });
};

