import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
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

export default function PaymentResponsive() {
  return (
    <>
      <CardMedia
        image={bgMainDesktop}
        sx={{
          maxWidth: "100%",
          height: 250,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            padding: "2rem 10rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              alignSelf: "start",
              width: 300,
              order: 2,
              mt: "-3.8rem",
              zIndex: 1,
              position: "relative",
            }}
          >
            <CardMedia
              sx={{ maxWidth: "100%", height: 150 }}
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
                sx={{ maxWidth: "20%", height: 25 }}
                alt="LOGO"
              />
              <CardContent
                sx={{
                  position: "absolute",
                  inset: 0,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "start",
                  mt: 5,
                }}
              >
                <Typography variant="p" letterSpacing={3} fontWeight="bold">
                  0000 0000 0000 0000
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
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
              width: 300,
              order: 1,
              position: "relative",
            }}
          >
            <CardMedia
              image={bgCardBack}
              sx={{ maxWidth: "100%", height: 150 }}
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
            gap: "1rem",
            padding: "2rem",
            paddingTop: 0,
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textTransform: "uppercase",
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
            }}
          >
            <TextField
              required
              label="Card Holder Name"
              defaultValue="Card Holder Name"
              placeholder="Card Holder Name"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textTransform: "uppercase",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
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
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
              mt: 10,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ width: "50%" }}
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
    </>
  );
}
