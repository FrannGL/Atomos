import { Paper } from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "100%", height: "92vh" }}
      />
      <h2>{item.name}</h2>
    </Paper>
  );
}

export default Item;
