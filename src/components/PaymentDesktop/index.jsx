import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import bgCardBack from "../../../public/assets/images/bg-card-back.png";
import bgCardFront from "../../../public/assets/images/bg-card-front.png";
import bgMainDesktop from "../../../public/assets/images/bg-main-desktop.png";
import bgMainMobile from "../../../public/assets/images/bg-main-mobile.png";
import iconComplete from "../../../public/assets/images/icon-complete.svg";
import cardLogo from "../../../public/assets/images/card-logo.svg";
import { NavLink } from "react-router-dom";
//
export default function PaymentDesktop() {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <CardMedia
          image={bgMainDesktop}
          sx={{
            maxWidth: "100%",
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "35% 100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              paddingInline: "7rem",
              my: 10,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Card
              sx={{
                alignSelf: "start",
                width: 345,
                order: 1,
                zIndex: 1,
                position: "relative",
              }}
            >
              <CardMedia
                sx={{ maxWidth: "100%", height: 170 }}
                image={bgCardFront}
                alt="Frente de la Tarjeta"
              />
              <Card
                variant="outlined"
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  backgroundColor: "transparent",
                  border: 0,
                  height: "100%",
                  padding: "1rem",
                }}
              >
                <CardMedia
                  image={cardLogo}
                  sx={{ maxWidth: "24%", height: 40 }}
                  alt="LOGO"
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    inset: 0,
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    variant="p"
                    letterSpacing={3}
                    fontWeight="bold"
                    sx={{ mb: 2 }}
                  >
                    0000 0000 0000 0000
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      textTransform: "uppercase",
                      fontSize: "0.8rem",
                    }}
                  >
                    <Typography variant="p">James Rodriguez</Typography>
                    <Typography variant="p">00/00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Card>

            <Card
              sx={{
                alignSelf: "end",
                width: 345,
                order: 2,
                position: "relative",
              }}
            >
              <CardMedia
                image={bgCardBack}
                sx={{ maxWidth: "100%", height: 170 }}
                alt="Dorso de la Tarjeta"
              />
              <CardContent
                sx={{
                  position: "absolute",
                  inset: 0,
                  padding: 0,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Typography
                  sx={{
                    paddingRight: "2rem",
                    paddingTop: 2.5,
                    fontSize: "1.2rem",
                  }}
                >
                  000
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              paddingTop: 0,
              width: "80%",
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textTransform: "uppercase",
                width: "100%",
              }}
            >
              <TextField
                required
                label="Card Number"
                defaultValue="Card Number"
                placeholder="Card Number"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textTransform: "uppercase",
                width: "100%",
              }}
            >
              <TextField
                required
                label="Card Holder Name"
                defaultValue="Card Holder Name"
                placeholder="Card Holder Name"
                fullWidth
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textTransform: "uppercase",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                <TextField
                  required
                  label="Exp Date MONTH"
                  defaultValue="MM"
                  placeholder="MM"
                />
                <TextField
                  required
                  label="Exp Date YEAR"
                  defaultValue="YY"
                  placeholder="YY"
                />
                <TextField
                  required
                  label="CVC"
                  defaultValue="CVC"
                  placeholder="CVC"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ minWidth: "100%" }}
                startIcon={<CheckCircleIcon />}
              >
                PAGAR
              </Button>
              <NavLink to={"../../cart"} style={{ textDecoration: "none" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="info"
                  sx={{ minWidth: "100%" }}
                  startIcon={<AddShoppingCartIcon />}
                >
                  VOLVER AL CARRITO
                </Button>
              </NavLink>
            </Box>
          </Box>

          {/* <Card sx={{ maxWidth: 50 }}>
  <CardMedia
    image={iconComplete}
    sx={{ height: 50 }}
    alt="Icono completado"
  />
  <Typography>GRACIAS!</Typography>
  <Typography>We ve added your card details</Typography>
  <Button>CONTINUAR</Button>
  </Card> */}
        </CardMedia>
      </Container>
    </>
  );
}
