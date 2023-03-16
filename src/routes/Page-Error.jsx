import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main>
      <NavBar />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          color="black"
          sx={{ fontWeight: "bold", py: 3, fontSize: "7rem" }}
        >
          Ops!
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", textAlign: "center" }}>
          Lo sentimos. No pudimos encontrar la ruta especificada.
        </Typography>
        <Typography
          sx={{
            color: "red",
            fontSize: "2.5rem",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          {" "}
          <ReportProblemIcon sx={{ fontSize: "3rem", mb: 1, mx: 1 }} />
          {error.statusText || error.message}
        </Typography>
      </Box>
    </main>
  );
}
