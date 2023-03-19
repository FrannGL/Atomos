import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <>
      <Grid
        container
        lg={12}
        sx={{
          display: "flex",
          mt: 10,
          width: "100%",
          height: "100%",
          backgroundColor: "grey",
          mx: "auto",
          px: 5,
          py: 5,
          gap: 2,
        }}
      >
        <Grid
          item
          sx={{
            minWidth: "35%",
            height: 300,
          }}
        >
          <Card>
            <CardMedia
              image="../../public/assets/images/fabrica.jpg"
              sx={{ height: 300 }}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "violet",
            minWidth: "63%",
            height: 300,
          }}
        >
          <Typography variant="p"></Typography>
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "blue", minWidth: "73%", height: 300 }}
        ></Grid>
        <Grid
          item
          sx={{ backgroundColor: "red", minWidth: "25%", height: 300 }}
        ></Grid>
        <Grid
          item
          sx={{ backgroundColor: "red", minWidth: "25%", height: 300 }}
        ></Grid>
        <Grid
          item
          sx={{ backgroundColor: "blue", minWidth: "73%", height: 300 }}
        ></Grid>
      </Grid>
      <Footer />
    </>
  );
}
