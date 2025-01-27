import { Box } from "@mui/material";
import SelectedCard from "./components/cards/SelectedCard";
import TopSelectedCard from "./components/cards/TopSelectedCard";
import { getColorByString } from "./lib/utils";

const DUMMY_DATA = ["Tech", "Robot", "Laptop"];

export default function Home() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gap: 2,
      }}
    >
      <TopSelectedCard title="GADGET" cardType={getColorByString("GADGET")} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {DUMMY_DATA.map((item) => (
          <SelectedCard
            title={item}
            cardType={getColorByString(item)}
            key={item}
          />
        ))}
      </Box>
    </Box>
  );
}
