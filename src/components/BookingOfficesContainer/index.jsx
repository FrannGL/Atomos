import { Box, Chip, List, ListItem, Paper, Typography } from "@mui/material";

// ICONOS MATERIAL-UI
import CheckIcon from "@mui/icons-material/Check";

// MOCKUPS
import sucursales from "../../mocks/sucursales";

import Footer from "../Footer";
import BookingOfficesDetail from "../BookingOfficesDetail";
import { useState, useEffect } from "react";
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
        setLoading(false);
        setOffices(response);
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

      {loading
        ? console.log("cargando...")
        : offices.map((item) => {
            console.log(item);
          })}

      {/* <Paper
        sx={{
          mt: 10,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 25,
        }}
      >
        <Box>
          <Typography variant="h5"></Typography>
          <Box
            sx={{
              borderBottom: 1,
              width: "30%",
              mb: 3,
              py: 0.3,
            }}
          ></Box>
          <Typography variant="h6">Franco Galluccio | 11-2155-7802</Typography>
          <Typography variant="p">francoivangalluccio@gmail.com</Typography>
          <List>
            Clásicas: Kölsch/Scotch/Porter.
            <ListItem>20 litros $13.500.-</ListItem>
            <ListItem>30 litros $19.000.-</ListItem>
            <ListItem>50 litros $30.500.-</ListItem>
          </List>
          <List>
            Especiales: Honey Beer/Playa Grande/
            <br />
            Imperial Stout/Barley Wine.
            <ListItem>20 litros $14.800</ListItem>
            <ListItem>30 litros $21.000</ListItem>
            <ListItem>50 litros $33.800</ListItem>
          </List>
          <List>
            IPA / Caravana
            <ListItem>20 litros $15.000</ListItem>
            <ListItem>30 litros $21.500</ListItem>
            <ListItem>50 litros $34.600</ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h5">MAR DEL PLATA</Typography>
          <Box
            sx={{
              borderBottom: 1,
              width: "30%",
              mb: 3,
              py: 0.3,
            }}
          ></Box>
          <Typography variant="h6">Franco Galluccio | 11-2155-7802</Typography>
          <Typography variant="p">francoivangalluccio@gmail.com</Typography>
          <List>
            Clásicas: Kölsch/Scotch/Porter.
            <ListItem>20 litros $13.500.-</ListItem>
            <ListItem>30 litros $19.000.-</ListItem>
            <ListItem>50 litros $30.500.-</ListItem>
          </List>
          <List>
            Especiales: Honey Beer/Playa Grande/
            <br />
            Imperial Stout/Barley Wine.
            <ListItem>20 litros $14.800</ListItem>
            <ListItem>30 litros $21.000</ListItem>
            <ListItem>50 litros $33.800</ListItem>
          </List>
          <List>
            IPA / Caravana
            <ListItem>20 litros $15.000</ListItem>
            <ListItem>30 litros $21.500</ListItem>
            <ListItem>50 litros $34.600</ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h5">MAR DEL PLATA</Typography>
          <Box
            sx={{
              borderBottom: 1,
              width: "30%",
              mb: 3,
              py: 0.3,
            }}
          ></Box>
          <Typography variant="h6">Franco Galluccio | 11-2155-7802</Typography>
          <Typography variant="p">francoivangalluccio@gmail.com</Typography>
          <List>
            Clásicas: Kölsch/Scotch/Porter.
            <ListItem>20 litros $13.500.-</ListItem>
            <ListItem>30 litros $19.000.-</ListItem>
            <ListItem>50 litros $30.500.-</ListItem>
          </List>
          <List>
            Especiales: Honey Beer/Playa Grande/
            <br />
            Imperial Stout/Barley Wine.
            <ListItem>20 litros $14.800</ListItem>
            <ListItem>30 litros $21.000</ListItem>
            <ListItem>50 litros $33.800</ListItem>
          </List>
          <List>
            IPA / Caravana
            <ListItem>20 litros $15.000</ListItem>
            <ListItem>30 litros $21.500</ListItem>
            <ListItem>50 litros $34.600</ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h5">MAR DEL PLATA</Typography>
          <Box
            sx={{
              borderBottom: 1,
              width: "30%",
              mb: 3,
              py: 0.3,
            }}
          ></Box>
          <Typography variant="h6">Franco Galluccio | 11-2155-7802</Typography>
          <Typography variant="p">francoivangalluccio@gmail.com</Typography>
          <List>
            Clásicas: Kölsch/Scotch/Porter.
            <ListItem>20 litros $13.500.-</ListItem>
            <ListItem>30 litros $19.000.-</ListItem>
            <ListItem>50 litros $30.500.-</ListItem>
          </List>
          <List>
            Especiales: Honey Beer/Playa Grande/
            <br />
            Imperial Stout/Barley Wine.
            <ListItem>20 litros $14.800</ListItem>
            <ListItem>30 litros $21.000</ListItem>
            <ListItem>50 litros $33.800</ListItem>
          </List>
          <List>
            IPA / Caravana
            <ListItem>20 litros $15.000</ListItem>
            <ListItem>30 litros $21.500</ListItem>
            <ListItem>50 litros $34.600</ListItem>
          </List>
        </Box>
      </Paper> */}
      <Footer />
    </>
  );
}
