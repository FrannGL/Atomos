// COMPONENTES MATERIAL-UI
import {
  Box,
  Card,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

// ICONOS MATERIAL-UI
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { Context } from "../../Context";
import ItemCountSmall from "../itemCountSmall";

export default function CartListItem({ product }) {
  const { showAlert } = useContext(Context);

  return (
    <>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Card
          sx={{
            width: "80%",
            height: 150,
            display: "flex",
          }}
        >
          <Box sx={{ width: "20%" }}>
            <CardMedia component="img" image={product.image} height="100%" />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
                height: 80,
              }}
            >
              <Typography
                minWidth="50%"
                textAlign="center"
                variant="h6"
                fontSize={12}
                fontWeight="bold"
              >
                PRODUCTO
              </Typography>
              <Typography
                minWidth="15%"
                textAlign="center"
                variant="h6"
                fontSize={12}
                fontWeight="bold"
              >
                PRECIO
              </Typography>
              <Typography
                minWidth="10%"
                textAlign="center"
                variant="h6"
                fontSize={12}
                fontWeight="bold"
              >
                CANTIDAD
              </Typography>
              <Typography
                minWidth="15%"
                textAlign="center"
                variant="h6"
                fontSize={12}
                fontWeight="bold"
              >
                SUBTOTAL
              </Typography>
              <Typography
                minWidth="10%"
                textAlign="center"
                variant="h6"
                fontSize={12}
                fontWeight="bold"
              >
                ELIMINAR
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box width="50%" textAlign="center" sx={{ mt: 1 }}>
                <Typography variant="p" textAlign="center" fontSize="1.5rem">
                  {product.name}
                </Typography>
              </Box>
              <Box width="15%" textAlign="center" sx={{ mt: 1 }}>
                <Typography variant="p" textAlign="center" fontSize="1.2rem">
                  $ {product.price}
                </Typography>
              </Box>

              <ItemCountSmall product={product} />

              <Box width="15%" textAlign="center" sx={{ mt: 1 }}>
                <Typography variant="p" textAlign="center" fontSize="1.2rem">
                  $ {product.price * product.cantidad}
                </Typography>
              </Box>
              <Box width="10%" textAlign="center">
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => showAlert(product)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
}
