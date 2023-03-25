import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context";

export default function AlertSuccess() {
  const { open } = useContext(Context);
  const { handleClose } = useContext(Context);

  return (
    <>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Producto Agregado al Carrito
        </Alert>
      </Snackbar>
    </>
  );
}
