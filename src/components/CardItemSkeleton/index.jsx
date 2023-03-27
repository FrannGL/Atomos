// COMPONENTES MATERIAL-UI
import { Box, Card, Skeleton, Stack } from "@mui/material";

export default function CardItemSkeleton() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "15%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 280,
          height: 400,
          display: "flex",
        }}
      >
        <Stack spacing={1} sx={{ width: "100%", mx: 2, my: 2 }}>
          <Skeleton variant="rounded" height="50%" width="100%" />
          <Skeleton variant="text" height="10%" />
          <Skeleton variant="rectangular" height="10%" />
          <Skeleton variant="text" height="10%" />
          <Stack
            sx={{
              width: "100%",
              mx: 2,
              my: 2,
              height: "15%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Skeleton variant="text" height="100%" width="60%" />
            <Skeleton variant="text" height="100%" width="40%" />
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}
