import { Box, List, ListItem, Paper, Typography } from "@mui/material";

export default function BookingOfficesDetail() {
  return (
    <>
      <Paper
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
          <Typography variant="h5">Sede MAR DEL PLATA</Typography>
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
        {/* <Box>
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
        </Box> */}
      </Paper>
    </>
  );
}
