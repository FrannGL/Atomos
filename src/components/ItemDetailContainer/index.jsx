import products from "../../mocks/products";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer({ categoryId, isCategoryRoute }) {
  const [product, setProduct] = useState(null);

  const getProduct = (id) => {
    return new Promise((resolve) => {
      const productoFiltrado = products.find((p) => p.id === parseInt(id));
      setTimeout(() => {
        resolve(productoFiltrado);
      }, 1000);
    });
  };

  useEffect(() => {
    getProduct(categoryId).then((item) => {
      setProduct(item);
    });
    // const productPromise = new Promise((resolve, reject) =>
    //   setTimeout(() => resolve(products), 2000)
    // );
    // productPromise
    //   .then((response) => {
    //     if (isCategoryRoute) {
    //       const productsFiltered = response.find(
    //         (producto) => producto.id === categoryId
    //       );
    //       setProduct(productsFiltered);
    //     } else {
    //       setProduct(response);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <Container maxWidth={false} disableGutters>
      <ItemDetail product={product} />
    </Container>
  );
}
