import { createContext, useState } from "react";

export const Context = createContext();
export default function CustomProvider({ children }) {
  const [itemsAddedQuantity, setItemsAddedQuantity] = useState([]);

  const onAdd = () => {
    setItemsAddedQuantity((prev) => prev.concat({}));
  };

  const onRemove = () => {
    setItemsAddedQuantity((prev) => prev.slice(1));
  };

  const value = {
    itemsAddedQuantity,
    onAdd,
    onRemove,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
