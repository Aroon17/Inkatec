import React from "react";
import { productos } from "../data/productos";
import ProductoCard from "../ProductoCard/ProductoCard";

function Home() {
  return (
    <section id="productos">
      <h2>
        <i classNameName="fas fa-laptop"></i> Catálogo de Productos
      </h2>

      <div className="grid-productos">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
