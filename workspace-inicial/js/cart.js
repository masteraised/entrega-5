//Definimos una función para generar las filas
function createQueue(element) {
  const queue = document.createElement("tr");
  queue.innerHTML = `
        <td><img src="${element.image
    }" class="miniatura" class="img-thumbnail" class="img-fluid"></td>
        <td class="text-success"> ${element.name}</td>
        <td class="costo-cell text-success">${element.unitCost} ${element.currency}</td>
        <td><input type="number" value="${element.count
    }" class="col-sm-2 w-75 mx-auto form-control-sm cantidad-input"  min="0"></td>
        <td class="subtotal-cell text-success">${element.unitCost * element.count} ${element.currency
    }</td>
        <td> <button class="delete-product" data-product-id="${element.id}" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
      </svg></button></td>
    `;
  return queue;
}

document.addEventListener("DOMContentLoaded", () => {
  // Función para calcular el subtotal de una fila
  function calcularSubtotal(fila) {
    const cantidadInput = fila.querySelector(".cantidad-input");
    const costoCell = fila.querySelector(".costo-cell");
    const subtotalCell = fila.querySelector(".subtotal-cell");

    const cantidad = parseInt(cantidadInput.value);
    const costoUnitario = parseFloat(costoCell.textContent.split(" ")[0]); // Obtén el valor numérico del costo

    const subtotal = cantidad * costoUnitario;
    subtotalCell.textContent = subtotal.toFixed(0) + " USD";
  }

  displayCartItems();


  function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const productInfoDiv = document.getElementById("cart-products");

    // Limpiamos cualquier contenido existente en el contenedor
    productInfoDiv.innerHTML = "";

    // Iteramos sobre los productos en el carrito y los mostramos
    cartItems.forEach((product) => {
      // Creamos una fila con los datos del producto
      let queue = createQueue(product);

      // Agregamos la fila a la tabla
      productInfoDiv.appendChild(queue);

      // Agregamos un evento "input" al campo de cantidad en esta fila
      const cantidadInput = queue.querySelector(".cantidad-input");
      cantidadInput.addEventListener("input", () => {
        // Obtén el valor actual del input
        let cantidad = parseInt(cantidadInput.value);

        // Verifica si el valor es menor que 1
        if (cantidad < 1) {
          cantidad = 1; // Establece el valor mínimo en 1
          cantidadInput.value = cantidad; // Actualiza el valor en el input
        }

        calcularSubtotal(queue);
      });

      // Agregamos un evento de clic al icono de eliminación (X) en la imagen del producto
      const deleteIcon = queue.querySelector(".delete-product");
      deleteIcon.addEventListener("click", (event) => {
        const productId = product.id;

        // Eliminar el producto del carrito (en la tabla del carrito)
        queue.remove();

        // Eliminar el producto del localStorage
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      });
    });
  }

    const overlay = document.getElementById("overlay");
    const mostrarOverlayButton = document.getElementById("mostrarOverlay");
    const cerrarOverlayButton = document.getElementById("cerrarOverlay");
  
    mostrarOverlayButton.addEventListener("click", () => {
      overlay.classList.add("active");
      // Usamos setTimeout para cerrar el overlay después de 2 segundos (2000 milisegundos)
      setTimeout(() => {
        overlay.classList.remove("active");
      }, 3000);
    });
  
    cerrarOverlayButton.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
    

    /*  SE PUEDE BORRAR (es un intento de la pauta 1)
    const subTotal = document.getElementsByClassName("subtotal-cell").value;

    subTotalytys = [];
    array.forEach(element => {
     
    }); */

});



/* 
Agrega un espacio donde se visualicen:

El subtotal general: la suma de los subtotales (costo por cantidad) de todos los artículos
El costo de envío: calculado a partir del envío seleccionado por el usuario (5%, 7% o 15%) y siendo un porcentaje del valor anterior (el subtotal).

El total a pagar: la suma de los dos valores anteriores.
Los 3 valores deberán actualizarse en tiempo real cuando se modifique el tipo de envío o los artículos en el carrito.

Todos los valores deberán ser mostrados en dólares.


if (currency == "UYU") {
  
} else {
  
}  */