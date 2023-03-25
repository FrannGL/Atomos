import { createContext, useState } from "react";

export const Context = createContext();
export default function CustomProvider({ children }) {
  const [itemsAdded, setItemsAdded] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const DeleteProduct = (product) => {
    const producto = product.find((item) => {
      item.id === id;
    });
    product.splice(product.indexOf(producto), 1);
  };

  const onAdd = (product, cantidad) => {
    setItemsAdded([...itemsAdded, { ...product, cantidad }]);
  };

  const value = {
    itemsAdded,
    onAdd,
    handleClick,
    handleClose,
    open,
    DeleteProduct,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
