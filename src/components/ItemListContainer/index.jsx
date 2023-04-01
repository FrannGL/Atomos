// COMPONENTES MATERIAL-UI
import { Container } from "@mui/material";

// HOOKS REACT
import { useEffect, useState } from "react";

// COMPONENTES PROPIOS
import ItemList from "../ItemList/index";

// FIREBASE
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");

    if (isCategoryRoute) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((err) => console.log(err));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((err) => console.log(err));
    }
  }, [categoryId]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: "#ededed" }}
    >
      <ItemList products={productos} />
    </Container>
  );
}
