// COMPONENTES MATERIAL-UI
import { Card, Skeleton, Stack, Box } from "@mui/material";

export default function CardItemDetailSkeleton() {
  return (
    <Card
      sx={{
        mt: 5,
        mb: 3,
        width: "90%",
        height: 410,
        display: "flex",
      }}
    >
      {/* ------------- IMAGEN --------------- */}
      <Box sx={{ width: "40%", mx: 2, my: 2 }}>
        <Skeleton variant="rectangular" height="100%" />
      </Box>

      <Stack sx={{ width: "100%", height: "auto", mx: 2, my: 2 }}>
        {/* --------- TITULO - INFO ---------- */}
        <Stack
          direction="row"
          sx={{ width: "100%", height: "auto", gap: 7, my: 2 }}
        >
          <Skeleton variant="rounded" height={50} width="50%" />
          <Skeleton variant="rounded" height={60} width="20%" />
        </Stack>

        {/* -------------- PRECIO ------------- */}
        <Skeleton variant="rounded" height="30%" width="20%" />

        {/* ------------- DESCRIPCION ---------- */}
        <Skeleton variant="text" height="80%" width="100%" />

        {/* ---------- ITEM-COUNT - BOTON AGREGAR ------- */}
        <Stack sx={{ width: "100%", height: "auto", gap: 3 }} direction="row">
          <Skeleton variant="text" height={60} width="25%" />
          <Skeleton variant="text" height={60} width="25%" />
        </Stack>

        {/* ------------ SEGUIR COMPRANDO ----------- */}
        <Skeleton variant="rounded" height="35%" width="25%" />
      </Stack>
    </Card>
  );
}
