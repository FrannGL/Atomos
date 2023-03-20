// COMPONENTES MATERIAL-UI
import { Container } from "@mui/system";

// MOCKS PRODUCTS
import products from "../../mocks/products";

// HOOKS REACT
import { useEffect, useState } from "react";

// COMPONENTES PROPIOS
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
    <Container
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: "#ededed" }}
    >
      <ItemDetail product={product} />
    </Container>
  );
}
