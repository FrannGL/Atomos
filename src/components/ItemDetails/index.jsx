import products from "../../mocks/products";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);

  return useEffect(() => {
    const productPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(products[2]), 2000)
    );
 
    productPromise
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);
  
}
