import { Box } from "@mui/material";
import TopArea from "./components/areas/TopArea";
import TopCategories from "./components/areas/TopCatefories";
import SocialMediaCard from "./components/cards/SocialMediaCard";
import CustomHeader from "./components/areas/CustomHeader";

export default function Home() {
  return (
    <Box>
      <div id="top"></div>
      <CustomHeader />
      <TopArea id="segment1" />
      <Box
        id="segment2"
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "var(--categoryArea)",
        }}
      >
        <TopCategories />
      </Box>
      <Box id="segment3" sx={{ bgcolor: "var(--topArea)", pb: 5 }}>
        <SocialMediaCard />
      </Box>
    </Box>
  );
}
