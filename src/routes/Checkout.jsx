import PaymentResponsive from "../components/PaymentResponsive";
import PaymentDesktop from "../components/PaymentDesktop";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

export default function Checkout() {
  const [loading, setLoading] = useState(true);
  const width = window.innerWidth;

  const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 1500));

  const getCart = async () => {
    try {
      await fakePromise();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CircularProgress size={50} />
          <Typography sx={{ mt: 3, fontSize: 20 }}>
            REDIRIGIENDO AL CENTRO DE PAGO...
          </Typography>
        </Box>
      ) : width > 900 ? (
        <PaymentDesktop />
      ) : (
        <PaymentResponsive />
      )}
    </>
  );
}

// {width > 900 ? <PaymentDesktop /> : <PaymentResponsive />}
