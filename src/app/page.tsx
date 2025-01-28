import { Box } from "@mui/material";
import TopArea from "./components/areas/TopArea";
import TopCategories from "./components/areas/TopCatefories";

export default function Home() {
  return (
    <Box>
      <TopArea />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "var(--categoryArea)",
        }}
      >
        <TopCategories />
      </Box>
    </Box>
  );
}
