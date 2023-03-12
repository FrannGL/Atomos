import { Box, Card, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";

export default function CardItemSkeleton() {
  return (
    <Card
      sx={{
        mt: 3,
        mb: 3,
        width: "22%",
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
  );
}
