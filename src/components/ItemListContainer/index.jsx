// COMPONENTES MATERIAL-UI
import { Container } from "@mui/material";

// MOCKS PRODUCTS
import products from "../../mocks/products";

// HOOKS REACT
import { useEffect, useState } from "react";

// COMPONENTES PROPIOS
import ItemList from "../ItemList/index";

export default function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const productPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(products), 2000)
    );

    productPromise
      .then((response) => {
        if (isCategoryRoute) {
          const productsFiltered = response.filter(
            (producto) => producto.category === categoryId
          );
          setProductos(productsFiltered);
        } else {
          setProductos(response);
        }
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <Container maxWidth={false} disableGutters>
      <ItemList products={productos} />
    </Container>
  );
}
