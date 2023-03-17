// COMPONENTES MATERIAL-UI
import { Paper, InputBase, Divider, IconButton } from "@mui/material";

// ICONOS MATERIAL-UI
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 250,
        height: 40,
        backgroundColor: "transparent",
        border: 1,
        color: "white",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Buscar..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "white" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
