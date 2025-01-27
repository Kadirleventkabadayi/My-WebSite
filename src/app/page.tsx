import { Box } from "@mui/material";
import SelectedCard from "./components/cards/SelectedCard";
import TopSelectedCard from "./components/cards/TopSelectedCard";

export default function Home() {
  return (
    <Box>
      <TopSelectedCard />
      {[1, 2, 3, 4, 5].map((item) => (
        <SelectedCard key={item} />
      ))}
    </Box>
  );
}
