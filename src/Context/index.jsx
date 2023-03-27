// REACT CONTEXT
import { createContext, useState } from "react";
export const Context = createContext();

// SWEET ALERT
import Swal from "sweetalert2";

export default function CustomProvider({ children }) {
  const [itemsAdded, setItemsAdded] = useState([]);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(1);

  // FUNCION ABRIR MENU
  const handleOpen = () => {
    setOpen(true);
  };

  // FUNCION CERRAR MENU
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // FUNCION AGREGAR PRODUCTOS AL CARRITO
  const onAdd = (product, cantidad) => {
    const existsInCart = itemsAdded.find((prod) => prod.id === product.id);
    if (existsInCart) {
      const carritoActualizado = itemsAdded.map((prod) => {
        if (prod.id === product.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setItemsAdded(carritoActualizado);
    } else {
      setItemsAdded([...itemsAdded, { ...product, cantidad }]);
    }
  };

  // FUNCION ELIMINAR PRODUCTOS DEL CARRITO
  const DeleteProduct = (id) => {
    const find = itemsAdded.filter((item) => item.id !== id);
    setItemsAdded(find);
  };

  // FUNCION VACIAR CARRITO
  const clearCart = () => {
    setItemsAdded([]);
  };

  // FUNCION PARA CALCULAR TOTAL DEL CARRITO
  const TotalPrice = () => {
    const acc = itemsAdded.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(acc);
  };

  // ALERTA AL CLICKEAR ELIMINAR PRODUCTO DEL CARRITO
  const showAlert = (product) => {
    Swal.fire({
      title: "¿Estás seguro que queres eliminar el producto?",
      text: "Si estás seguro hace click en Si. Caso contrario, No.",
      icon: "warning",
      iconColor: "red",
      confirmButtonText: "Si, eliminar",
      confirmButtonColor: "green",
      cancelButtonText: "No, cancelar",
      cancelButtonColor: "red",
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteProduct(product.id);
        Swal.fire("Hecho!", "Producto Eliminado", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "Cancelaste la accion", "error");
      }
    });
  };

  // ALERTA AL CLICKEAR "VACIAR CARRITO"
  const showClearAlert = () => {
    Swal.fire({
      title: "¿Estás seguro que queres vaciar el carrito?",
      text: "Si estás seguro hace click en Si. Caso contrario, No.",
      icon: "warning",
      iconColor: "red",
      confirmButtonText: "VACIAR",
      confirmButtonColor: "green",
      cancelButtonText: "CANCELAR",
      cancelButtonColor: "red",
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Hecho!", "Carrito vacío", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "Cancelaste la accion", "error");
      }
    });
  };

  // VALUES DEL CONTEXT
  const value = {
    itemsAdded,
    onAdd,
    handleOpen,
    handleClose,
    open,
    DeleteProduct,
    showAlert,
    TotalPrice,
    total,
    showClearAlert,
    count,
    setCount,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
