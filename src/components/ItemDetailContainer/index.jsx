import products from "../../mocks/products";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer({ id }) {
  const [product, setProduct] = useState(null);

  const getProduct = (id) => {
    return new Promise((resolve) => {
      const productoFiltrado = products.find((p) => p.id === parseInt(id));
      setTimeout(() => {
        resolve(productoFiltrado);
      }, 2000);
    });
  };

  useEffect(() => {
    getProduct(id).then((item) => {
      setProduct(item);
    });
  }, [id]);

  return (
    <Container maxWidth={false} disableGutters>
      <ItemDetail product={product} />
    </Container>
  );
}
