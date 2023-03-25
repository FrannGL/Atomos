import { Alert, Snackbar } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context";

export default function AlertError() {
  const { open } = useContext(Context);
  const { handleClose } = useContext(Context);

  return (
    <>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Debe Agregar un Producto
        </Alert>
      </Snackbar>
    </>
  );
}
