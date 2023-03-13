import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5" align="center">
              {`${new Date().getFullYear()} React Starter App including Vite +
              Material UI + React Router `}
            </Typography>
            <Typography color="white" variant="h6" align="center" fontSize={15}>
              Developed by Franco Galluccio
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              <NavLink
                to={"https://www.instagram.com/fraaaangl/"}
                target="_blank"
              >
                <IconButton color="base">{<InstagramIcon />}</IconButton>
              </NavLink>
              <NavLink
                to={"https://www.facebook.com/franco.galluccio/"}
                target="_blank"
              >
                <IconButton color="base">{<FacebookIcon />}</IconButton>
              </NavLink>
              <NavLink to={"https://twitter.com/coderhouse"} target="_blank">
                <IconButton color="base">{<TwitterIcon />}</IconButton>
              </NavLink>
              <NavLink to={"https://github.com/FrannGL"} target="_blank">
                <IconButton color="base">{<GitHubIcon />}</IconButton>
              </NavLink>
              <NavLink
                to={
                  "https://www.linkedin.com/in/franco-ivan-galluccio-553b1224a/"
                }
                target="_blank"
              >
                <IconButton color="base">{<LinkedInIcon />}</IconButton>
              </NavLink>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
