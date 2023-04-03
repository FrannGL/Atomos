import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
  Modal,
} from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";

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
import { useState } from "react";
import CartModalDetail from "../CartModalDetail";

export default function PaymentDesktop() {
  const [orderDetail, setOrderDetail] = useState(null);

  let initialValues = {
    nombre: "",
    numeroTarjeta: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  };

  const submitForm = (data) => {
    console.log(data);
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues,
    onSubmit: submitForm,
    validationSchema: Yup.object({
      nombre: Yup.string().required("Debes Ingresar un Nombre"),
      numeroTarjeta: Yup.number().required(
        "Debes Ingresar los numeros de la tarjeta"
      ),
      expMonth: Yup.number().required("Debes Ingresar el mes de vencimiento"),
      expYear: Yup.number().required("Debes Ingresar el año de vencimiento"),
      cvc: Yup.number().required("Debes Ingresar el codigo de seguridad"),
    }),
  });

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
    const form = document.querySelector("#form");

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
                    id="cardNumber"
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
                  id="cardCvc"
                >
                  000
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box
            sx={{
              maxWidth: "100%",
              my: 10,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <CartModalDetail />
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
              onSubmit={handleSubmit}
              autoComplete="off"
              id="form"
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
                  placeholder="Card Number"
                  id="inputNumber"
                  type="number"
                  name="numeroTarjeta"
                  error={errors.numeroTarjeta}
                  helperText={errors.numeroTarjeta}
                  onChange={handleChange}
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
                  placeholder="Card Holder Name"
                  id="inputName"
                  name="nombre"
                  onChange={handleChange}
                  error={errors.nombre}
                  helperText={errors.nombre}
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
                    placeholder="MM"
                    type="number"
                    id="inputExpMonth"
                    name="expMonth"
                    error={errors.expMonth}
                    helperText={errors.expMonth}
                    onChange={handleChange}
                  />
                  <TextField
                    required
                    label="Exp Date YEAR"
                    placeholder="YY"
                    type="number"
                    id="inputExpYear"
                    name="expYear"
                    error={errors.expYear}
                    helperText={errors.expYear}
                    onChange={handleChange}
                  />
                  <TextField
                    required
                    label="CVC"
                    placeholder="CVC"
                    type="number"
                    id="inputCvc"
                    name="cvc"
                    error={errors.cvc}
                    helperText={errors.cvc}
                    onChange={handleChange}
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
