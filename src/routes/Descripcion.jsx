import { Container } from "@mui/material/";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

function Descripcion() {
  const { id } = useParams();
  return (
    <>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{ backgroundColor: "#ededed" }}
      >
        <ItemDetailContainer id={id} />
      </Container>
    </>
  );
}

export default Descripcion;
