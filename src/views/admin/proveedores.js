const cantidadProductosInput = document.getElementById("cantidadProductos");
const productosSection = document.getElementById("productosSection");
let add_button = document.querySelector(".add");

add_button.addEventListener("click", (e) => {
  e.preventDefault();
  const cantidad = parseInt(cantidadProductosInput.value);

  // Limpiar sección de productos antes de agregar nuevos campos
  productosSection.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    productoDiv.innerHTML = `
        <div class="mb-3">
          <label for="nombreProducto${i}" class="form-label">Nombre del Producto</label>
          <input type="text" class="form-control nombreProducto" id="nombreProducto${i}" required />
        </div>
        <div class="mb-3">
          <label for="precioProducto${i}" class="form-label">Precio</label>
          <input type="number" class="form-control precioProducto" id="precioProducto${i}" required />
        </div>
        <div class="mb-3">
          <label for="cantidadProducto${i}" class="form-label">Cantidad</label>
          <input type="number" class="form-control cantidadProducto" id="cantidadProducto${i}" required />
        </div>
      `;

    productosSection.appendChild(productoDiv);
  }
});
