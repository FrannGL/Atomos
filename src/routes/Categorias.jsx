import { Container } from "@mui/material/";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

function Categorias() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <>
      <NavBar />
      <Container maxWidth="xl" disableGutters>
        <ItemListContainer
          isCategoryRoute={isCategoryRoute}
          categoryId={params.id}
        />
      </Container>
      <Footer />
    </>
  );
}

export default Categorias;
