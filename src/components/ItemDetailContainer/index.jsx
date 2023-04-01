// COMPONENTES MATERIAL-UI
import { Container } from "@mui/system";

// HOOKS REACT
import { useEffect, useState } from "react";

// COMPONENTES PROPIOS
import ItemDetail from "../ItemDetail";

// FIREBASE
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "Items", id);

    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{ backgroundColor: "#ededed" }}
    >
      <ItemDetail product={product} />
    </Container>
  );
}
