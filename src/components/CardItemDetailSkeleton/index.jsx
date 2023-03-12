import { Card, Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/system";

export default function CardItemDetailSkeleton() {
  return (
    <Card
      sx={{
        mt: 10,
        mb: 3,
        width: "90%",
        height: 350,
        display: "flex",
      }}
    >
      <Box sx={{ width: "45%", mx: 2, my: 2 }}>
        <Skeleton variant="rectangular" height="100%" />
      </Box>

      <Stack spacing={1} sx={{ width: "100%", mx: 2, my: 2 }}>
        <Skeleton variant="rounded" height="10%" width="50%" />
        <Skeleton variant="text" height="20%" width="30%" />
        <Skeleton variant="text" height="40%" width="100%" />
        <Skeleton variant="text" height="20%" width="30%" />
        <Skeleton variant="text" height="20%" width="30%" />
      </Stack>
    </Card>
  );
}
