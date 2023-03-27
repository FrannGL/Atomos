// COMPONENTES MATERIAL-UI
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

// ICONOS MATERIAL-UI
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// HOOKS REACT
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../../Context";

export default function CardItem({ product }) {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const { count } = useContext(Context);
  const { setCount } = useContext(Context);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { onAdd } = useContext(Context);

  return (
    <Card
      sx={{
        bgcolor: "#040b16",
        minWidth: 275,
        height: 490,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 0.8,
        borderRadius: 7,
        boxShadow: 10,
      }}
    >
      {/* ----- IMAGEN ------- */}
      <CardMedia
        component="img"
        alt={product.name}
        height="200"
        image={product.image}
      />
      <CardContent
        sx={{
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* ------ TITULO -------- */}
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            mt: 1,
          }}
        >
          {product.name}
        </Typography>
        <Box
          sx={{
            width: 200,
            height: 50,
            margin: "auto",
            color: "white",
            display: "flex",
          }}
        >
          {/* ----- INFO -------- */}
          <CardMedia
            image={product.typeimage}
            sx={{
              border: 1,
              width: 60,
              height: "100%",
            }}
          ></CardMedia>
          <Box sx={{ width: "100%" }}>
            {/* ------ CATEGORIA ------- */}
            <Box
              sx={{
                width: "100%",
                height: "50%",
                border: 1,
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: 3,
              }}
            >
              {product.category}
            </Box>
            {/* ------ DETALLE PRODUCTO ------- */}
            <Box
              sx={{
                width: "100%",
                height: "50%",
                border: 1,
                textAlign: "center",
              }}
            >
              {product.ibu} - {product.abv}
            </Box>
          </Box>
        </Box>
        {/* --------- PRECIO ---------- */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            color: "#fff",
            fontSize: 25,
            mt: 1,
          }}
        >
          $ {product.precio}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* ------ COUNT -------- */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: 1,
            width: "50%",
            height: 30,
            color: "white",
          }}
        >
          <Box
            sx={{
              border: 1,
              backgroundColor: "white",
              width: "30%",
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ width: "25%" }}
              disabled={count === 1}
              onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
            >
              <RemoveIcon sx={{ fontSize: 20, color: "black" }} />
            </IconButton>
          </Box>
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            {count}
          </Typography>
          <Box
            sx={{
              border: 1,
              backgroundColor: "white",
              width: "30%",
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => setCount(count + 1)}>
              <AddIcon sx={{ fontSize: 20, color: "black" }} />
            </IconButton>
          </Box>
        </Box>
        {/* ------- AGREGAR AL CARRITO ---------- */}
        <Button
          size="small"
          variant="contained"
          color="info"
          onClick={() => {
            onAdd(product, 1);
            handleOpen();
          }}
          sx={{ width: "80%" }}
        >
          Agregar al carrito
        </Button>
        {/* --------- VER MÁS ------------- */}
        <Button size="small" variant="outlined" color="base">
          <NavLink
            to={`/descripcion/${product.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Ver Más
          </NavLink>
        </Button>
      </CardActions>
      {/* ---------- ALERTA ------------- */}
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
    </Card>
  );
}
