import { Box } from "@mui/material";
import TopSelectedCard from "../cards/TopSelectedCard";
import { getColorByString } from "@/app/lib/utils";
import SelectedCard from "../cards/SelectedCard";

const DUMMY_DATA = ["Tech", "Robot", "Laptop"];

function TopArea() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gap: 2,
        backgroundColor: "var(--topArea)",
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

export default TopArea;
