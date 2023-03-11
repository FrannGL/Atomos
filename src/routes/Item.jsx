import { Container } from "@mui/material/";
import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";

function ItemRoot() {
  return (
    <>
      <NavBar />
      <Container maxWidth="xl" disableGutters>
        <ItemDetailContainer />
      </Container>
    </>
  );
}

export default ItemRoot;
