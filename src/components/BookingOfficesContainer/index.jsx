// COMPONENTES MATERIAL-UI
import { Box, Chip } from "@mui/material";

// ICONOS MATERIAL-UI
import CheckIcon from "@mui/icons-material/Check";

// HOOKS REACT
import { useState, useEffect } from "react";

// MOCKUPS
import sucursales from "../../mocks/sucursales";

// COMPONENTES PROPIOS
import Footer from "../Footer";
import BookingOfficesDetail from "../BookingOfficesDetail";
export default function BookingOfficesContainer() {
  const [offices, setOffices] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const officesPromise = new Promise((resolve, reject) =>
      resolve(sucursales)
    );
    officesPromise
      .then((response) => {
        setOffices(response);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setOffices]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Chip
          icon={<CheckIcon />}
          label="Barriles"
          variant="outlined"
          color="success"
          sx={{ p: 2.5, fontSize: "1.1rem" }}
        ></Chip>
        <Chip
          icon={<CheckIcon />}
          label="Alquiler de Equipo"
          variant="outlined"
          color="success"
          sx={{ p: 2.5, fontSize: "1.1rem" }}
        ></Chip>
        <Chip
          icon={<CheckIcon />}
          label="Instalación"
          variant="outlined"
          color="success"
          sx={{ p: 2.5, fontSize: "1.1rem" }}
        ></Chip>
        <Chip
          icon={<CheckIcon />}
          label="Hielo"
          variant="outlined"
          color="success"
          sx={{ p: 2.5, fontSize: "1.1rem" }}
        ></Chip>
      </Box>

      <ul
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {loading
          ? console.log("cargando...")
          : offices.map((item) => {
              return (
                <li style={{ listStyle: "none" }}>
                  {<BookingOfficesDetail item={item} />}
                </li>
              );
            })}
      </ul>

      <Footer />
    </>
  );
}
