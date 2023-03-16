import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CardItem({ product }) {
  const { id } = useParams();

  return (
    <Card
      sx={{
        bgcolor: "#040b16",
        maxWidth: 290,
        height: 430,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 0.8,
        borderRadius: 7,
        boxShadow: 10,
      }}
    >
      <CardMedia
        component="img"
        alt={product.name}
        height="200"
        image={product.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ color: "#fff", fontWeight: "bold" }}
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
          <CardMedia
            image={product.typeimage}
            sx={{
              border: 1,
              width: 60,
              height: "100%",
            }}
          ></CardMedia>
          <Box sx={{ width: "100%" }}>
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
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            color: "#fff",
            fontSize: 25,
            mt: 2,
          }}
        >
          $ {product.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="info">
          Agregar al carrito
        </Button>
        <Button size="small" variant="outlined" color="base">
          <NavLink
            to={`/descripcion/${product.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Ver Más
          </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
}
