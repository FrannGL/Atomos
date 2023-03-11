import products from "../../mocks/products";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ categoryId, isCategoryRoute }) {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const productPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(products), 2000)
    );

    productPromise
      .then((response) => {
        if (isCategoryRoute) {
          const productsFiltered = response.find(
            (producto) => producto.id === categoryId
          );
          setProduct(productsFiltered);
        } else {
          setProduct(response);
        }
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <Container maxWidth={false} disableGutters>
      <ItemDetail product={product} />
    </Container>
  );
}
