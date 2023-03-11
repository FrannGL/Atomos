import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function Item({ product }) {
  return (
    <Card
      sx={{
        bgcolor: "#040b16",
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        borderRadius: 7,
        boxShadow: 10,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
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
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ color: "#fff" }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Button size="small" variant="contained" color="info">
            Agregar al carrito
          </Button>
          <Button size="small" variant="outlined" color="base">
            <NavLink
              to={`/item/${product.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Ver Más
            </NavLink>
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
