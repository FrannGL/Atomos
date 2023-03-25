import { Box, Card, Container, Skeleton, Stack } from "@mui/material";

export default function CartListItemSkeleton() {
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
            mt: 5,
            mb: 3,
            width: "80%",
            height: 170,
            display: "flex",
          }}
        >
          <Box sx={{ width: "20%", mx: 2, my: 2 }}>
            <Skeleton variant="rectangular" height="100%" />
          </Box>

          <Stack
            spacing={1}
            direction="row"
            sx={{ width: "100%", mx: 2, my: 2, mt: 15 }}
          >
            <Skeleton variant="text" height="40%" width="20%" />
            <Skeleton variant="text" height="40%" width="20%" />
            <Skeleton variant="text" height="40%" width="20%" />
            <Skeleton variant="text" height="40%" width="20%" />
            <Skeleton variant="text" height="40%" width="20%" />
          </Stack>
        </Card>
      </Container>
    </>
  );
}
