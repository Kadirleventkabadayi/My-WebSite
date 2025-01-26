import { Box } from "@mui/material";
import SelectedCard from "./components/cards/SelectedCard";

export default function Home() {
  return (
    <Box>
      {[1, 2, 3, 4, 5].map((item) => (
        <SelectedCard key={item} />
      ))}
    </Box>
  );
}
