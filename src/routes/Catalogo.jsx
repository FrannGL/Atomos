import { Container } from "@mui/material/";
import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

function Catalogo() {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <Container maxWidth="xl" disableGutters>
        <ItemDetailContainer id={id} />
      </Container>
    </>
  );
}

export default Catalogo;
