// COMPONENTES MATERIAL-UI
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";

// ICONOS MATERIAL UI
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// HOOKS REACT
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../../Context";

// IMAGENES
import bgCardBack from "../../../public/assets/images/bg-card-back.png";
import bgCardFront from "../../../public/assets/images/bg-card-front.png";
import bgMainDesktop from "../../../public/assets/images/bg-main-desktop.png";
import iconComplete from "../../../public/assets/images/icon-complete.svg";
import cardLogo from "../../../public/assets/images/card-logo.svg";

// COMPONENTES PROPIOS
import CartModalDetail from "../CartModalDetail";

// FORMIK Y YUP
import { useFormik } from "formik";
import * as Yup from "yup";

export default function PaymentResponsive() {
  const [orderDetail, setOrderDetail] = useState([]);
  const [payment, setPayment] = useState(false);
  const { setItemsAdded } = useContext(Context);
  const { itemsAdded } = useContext(Context);
  const { total } = useContext(Context);

  let initialValues = {
    nombre: "",
    numeroTarjeta: "",
    dni: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  };

  const submitForm = (data) => {
    const order = [data, ...itemsAdded, total];
    setOrderDetail(order);
    console.log(order);
    setPayment(true);
    setItemsAdded([]);
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues,
    onSubmit: submitForm,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Debes Ingresar un Nombre")
        .matches(
          /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
          "No debe ingresar números ni simbolos"
        ),
      numeroTarjeta: Yup.string()
        .required("Debes Ingresar los numeros de la tarjeta")
        .matches(/^[0-9]+$/, "Debes ingresar como máximo 16 caracteres")
        .min(16, "Debes ingresar los 16 números de la tarjeta"),
      dni: Yup.string()
        .required("Debes ingresar el número de DNI del Titular")
        .matches(/^[0-9]+$/, "Debes ingresar sólo números con un máximo de 8")
        .min(8, "Debes ingresar sólo números con un máximo de 8"),
      expMonth: Yup.string()
        .required("Debes Ingresar el mes de vencimiento")
        .matches(/^[0-9]+$/, "Debes ingresar como máximo 2 caracteres")
        .max(2, "Debes ingresar como máximo 2 caracteres"),
      expYear: Yup.string()
        .required("Debes Ingresar el año de vencimiento")
        .matches(/^[0-9]+$/, "Debes ingresar como máximo 2 caracteres")
        .max(2, "Debes ingresar como máximo 2 caracteres"),
      cvc: Yup.string()
        .required("Debes Ingresar el codigo de seguridad")
        .matches(/^[0-9]+$/, "Debes ingresar como máximo 3 caracteres")
        .max(3, "Debes ingresar como máximo 3 caracteres"),
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
          sx={{
            maxWidth: "100%",
            my: 10,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {payment ? (
            <Card
              sx={{
                maxWidth: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                border: 0,
                padding: 5,
                mt: 15,
              }}
              variant="outlined"
            >
              <CardMedia
                image={iconComplete}
                sx={{ height: 50, width: 50 }}
                alt="Icono completado"
              />
              <Typography sx={{ mt: 3, fontSize: 20 }} variant="h2">
                ¡ MUCHAS GRACIAS !
              </Typography>
              <Typography>Hemos registrado tu orden</Typography>
              <NavLink to={"/"}>
                <Button variant="contained" size="small" sx={{ mt: 3 }}>
                  VOLVER AL INICIO
                </Button>
              </NavLink>
            </Card>
          ) : (
            <>
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
                    label="Número de Tarjeta"
                    placeholder="Número de Tarjeta"
                    id="inputNumber"
                    type="number"
                    name="numeroTarjeta"
                    error={errors.numeroTarjeta}
                    helperText={errors.numeroTarjeta}
                    value={values.numeroTarjeta}
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
                    label="Titular de la Tarjeta"
                    placeholder="Titular de la Tarjeta"
                    id="inputName"
                    name="nombre"
                    type="text"
                    onChange={handleChange}
                    error={errors.nombre}
                    helperText={errors.nombre}
                    value={values.nombre}
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
                  <TextField
                    required
                    label="DNI del Titular"
                    placeholder="DNI del Titular"
                    name="dni"
                    type="text"
                    onChange={handleChange}
                    error={errors.dni}
                    helperText={errors.dni}
                    value={values.dni}
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
                      label="Mes de Vencimiento"
                      placeholder="MM"
                      type="number"
                      id="inputExpMonth"
                      name="expMonth"
                      error={errors.expMonth}
                      helperText={errors.expMonth}
                      value={values.expMonth}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      label="Año de Vencimiento"
                      placeholder="YY"
                      type="number"
                      id="inputExpYear"
                      name="expYear"
                      error={errors.expYear}
                      helperText={errors.expYear}
                      value={values.expYear}
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
                      value={values.cvc}
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
            </>
          )}
        </Box>
      </CardMedia>
    </>
  );
}
