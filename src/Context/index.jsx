// REACT CONTEXT
import { createContext, useState } from "react";
export const Context = createContext();

// SWEET ALERT
import Swal from "sweetalert2";

export default function CustomProvider({ children }) {
  const [itemsAdded, setItemsAdded] = useState([]);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  // FUNCION ABRIR MENU
  const handleClick = () => {
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
    setItemsAdded([...itemsAdded, { ...product, cantidad }]);
  };

  // FUNCION ELIMINAR PRODUCTOS DEL CARRITO
  const DeleteProduct = (id) => {
    const find = itemsAdded.filter((item) => item.id !== id);
    setItemsAdded(find);
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

  // VALUES DEL CONTEXT
  const value = {
    itemsAdded,
    onAdd,
    handleClick,
    handleClose,
    open,
    DeleteProduct,
    showAlert,
    TotalPrice,
    total,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
