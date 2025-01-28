"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const CustomHeader: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "royalblue",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Toolbar sx={{ width: "60%", gap: 5 }}>
        <Button
          sx={{
            fontSize: "large",
            fontWeight: "bold",
            borderBlockEnd: "2px solid white",
            borderRadius: 0,
          }}
          color="inherit"
          onClick={() => handleScroll("top")}
        >
          My Blog
        </Button>
        <Button color="inherit" onClick={() => handleScroll("segment1")}>
          Segment 1
        </Button>
        <Button color="inherit" onClick={() => handleScroll("segment2")}>
          Segment 2
        </Button>
        <Button color="inherit" onClick={() => handleScroll("segment3")}>
          Segment 3
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
