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

  const onAdd = (product, cantidad) => {
    setItemsAdded([...itemsAdded, { ...product, cantidad }]);
  };

  const value = {
    itemsAdded,
    onAdd,
    handleClick,
    handleClose,
    open,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
