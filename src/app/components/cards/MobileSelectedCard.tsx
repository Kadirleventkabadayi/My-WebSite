import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import {
  checkScreenSize,
  replaceHyphensWithSpaces,
  timeAgo,
} from "@/app/lib/utils";

interface SelectedCardProps {
  cardType?: string;
  title: string;
  description: string;
  updated_at: string;
  repoUrl: string;
  imgUrl: string;
}

const MobileSelectedCard = ({
  cardType,
  title,
  description,
  updated_at,
  repoUrl,
  imgUrl,
}: SelectedCardProps) => {
  return (
    <Card
      onClick={() => window.open(repoUrl)}
      sx={{
        display: "flex",
        flexDirection: checkScreenSize() ? "column" : "row",
        maxWidth: checkScreenSize() ? "100%" : 700,
        width: checkScreenSize() ? "100%" : "25vw",
        minWidth: checkScreenSize() ? "100%" : 360,
        height: checkScreenSize() ? "auto" : "26.5vh",
        backgroundColor: "var(--background)",
        mb: 1,
        zIndex: 100,
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: checkScreenSize() ? "column" : "row",
        }}
      >
        <CardMedia
          sx={{
            height: checkScreenSize() ? "auto" : "26.5vh",
            width: checkScreenSize() ? "100%" : "26.5vh",
            p: 1,
            borderRadius: 3,
          }}
          component="img"
          image={imgUrl}
          alt={title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: checkScreenSize() ? "space-between" : "",
            height: checkScreenSize() ? "auto" : "26vh",
            width: checkScreenSize() ? "100%" : "75%",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              width: "100%",
              backgroundColor: cardType || "orange",
              p: 0.5,
              borderRadius: 1,
              color: "white",
              fontWeight: "bold",
              fontSize: checkScreenSize() ? "1rem" : "0.8rem",
              textAlign: "center",
            }}
          >
            {replaceHyphensWithSpaces(title.toUpperCase())}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: checkScreenSize() ? "auto" : "80%",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                height: "40%",
                color: "var(--foreground)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontWeight: "bold",
                fontSize: checkScreenSize() ? "1rem" : "1.2rem",
                mt: 1,
              }}
            >
              {description} project
            </Typography>

            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "auto" }}
            >
              <Avatar
                sx={{ width: 24, height: 24, marginRight: 1 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s"
              />
              <Typography
                variant="body2"
                color="var(--foreground)"
                sx={{ fontWeight: "bold" }}
              >
                Kadir Levent
              </Typography>
              <Divider
                sx={{ marginInline: 1, borderColor: "var(--foreground)" }}
                orientation="vertical"
                flexItem
              />
              <Typography
                variant="body2"
                color="var(--foreground)"
                sx={{ fontWeight: "bold", color: "gray" }}
              >
                {timeAgo(updated_at)}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MobileSelectedCard;
