import { checkScreenSize } from "@/app/lib/utils";
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
            width: checkScreenSize() ? "55vw" : "29vw",
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
          {!checkScreenSize() && (
            <Skeleton
              variant="rectangular"
              sx={{
                bgcolor: "gray",
                height: "80vh",
                width: "60vw",
              }}
            />
          )}

          <Box
            sx={{
              display: "flex",
              gap: "2.5vh",
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
                  width: checkScreenSize() ? "90vw" : "25vw",
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
