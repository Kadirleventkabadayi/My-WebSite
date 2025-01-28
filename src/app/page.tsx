import { Box } from "@mui/material";
import TopArea from "./components/areas/TopArea";
import TopCategories from "./components/areas/TopCatefories";
import SocialMediaCard from "./components/cards/SocialMediaCard";

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
      <Box sx={{ bgcolor: "var(--topArea)", pb: 5 }}>
        <SocialMediaCard />
      </Box>
    </Box>
  );
}
