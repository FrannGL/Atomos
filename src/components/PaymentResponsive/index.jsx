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
import { useEffect } from "react";

export default function PaymentResponsive() {
  useEffect(() => {
    const inputNumber = document.querySelector("#inputNumber");
    const inputName = document.querySelector("#inputName");
    const inputExpMont = document.querySelector("#inputExpMonth");
    const inputExpYear = document.querySelector("#inputExpYear");
    const inputCvc = document.querySelector("#inputCvc");
    const cardNumber = document.querySelector("#cardNumber");
    const cardName = document.querySelector("#cardName");
    const cardExpMonth = document.querySelector("#cardExpMonth");
    const cardExpYear = document.querySelector("#cardExpYear");
    const cardCvc = document.querySelector("#cardCvc");

    inputName.addEventListener("input", () => {
      cardName.innerText = inputName.value;
      if (inputName.value.length === 0) {
        cardName.innerText = "JAMES RODRIGUEZ";
      }
    });

    inputNumber.addEventListener("input", () => {
      cardNumber.innerText = inputNumber.value;
      if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
      }
    });

    inputExpMont.addEventListener("input", () => {
      cardExpMonth.innerText = inputExpMonth.value;
      if (inputExpMonth.value.length === 0) {
        cardExpMonth.innerText = "00";
      }
    });

    inputExpYear.addEventListener("input", () => {
      cardExpYear.innerText = inputExpYear.value;
      if (inputExpYear.value.length === 0) {
        cardExpYear.innerText = "00";
      }
    });

    inputCvc.addEventListener("input", () => {
      cardCvc.innerText = inputCvc.value;
      if (inputCvc.value.length === 0) {
        cardCvc.innerText = "000";
      }
    });
  }, []);

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
                <Typography
                  variant="p"
                  letterSpacing={3}
                  fontWeight="bold"
                  id="cardNumber"
                >
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
                  <Typography variant="p" id="cardName">
                    James Rodriguez
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="p" id="cardExpMonth">
                      00
                    </Typography>
                    <Typography variant="p">/</Typography>
                    <Typography variant="p" id="cardExpYear">
                      00
                    </Typography>
                  </Box>
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
                id="cardCvc"
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
              placeholder="Card Number"
              id="inputNumber"
              type="number"
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
              placeholder="Card Holder Name"
              id="inputName"
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
                placeholder="MM"
                id="inputExpMonth"
                type="number"
              />
              <TextField
                required
                label="Exp Date YEAR"
                placeholder="YY"
                id="inputExpYear"
                type="number"
              />
              <TextField
                required
                label="CVC"
                placeholder="CVC"
                id="inputCvc"
                type="number"
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
