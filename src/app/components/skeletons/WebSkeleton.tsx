import { Box, Skeleton } from "@mui/material";

const WebSkeleton: React.FC = () => {
  return (
    <Box className=" bg-categoryArea pb-20 ">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            bgcolor: "gray",
            height: "10vh",
            width: "29vw",
            marginBlock: "3vh",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Skeleton
            variant="rectangular"
            sx={{
              bgcolor: "gray",
              height: "80vh",
              width: "60vw",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {[0, 1, 2].map((item) => (
              <Skeleton
                key={item}
                variant="rectangular"
                sx={{
                  bgcolor: "gray",
                  width: "25vw",
                  height: "25vh",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WebSkeleton;
