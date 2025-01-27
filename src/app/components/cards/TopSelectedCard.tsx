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
import { SxProps, Theme } from "@mui/system";

interface TopSelectedCardProps {
  cardSx?: SxProps<Theme>;
  cardType?: string;
  title: string;
}

function TopSelectedCard({ cardSx, cardType, title }: TopSelectedCardProps) {
  return (
    <Card
      sx={{
        m: 2,
        ...cardSx,
      }}
    >
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          sx={{
            width: "100%",
            height: "80vh",
            borderRadius: 1,
          }}
          component="img"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s"
          alt="Levent"
        />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.76234243697479)3%, rgba(0,0,0,0) 100%)",
            padding: 2,
            justifyContent: "flex-end",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              backgroundColor: cardType || "orange",
              p: 0.5,
              borderRadius: 1,
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              width: "25%",
              textAlign: "center",
            }}
          >
            {title.toUpperCase()}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              mt: 1,
            }}
          >
            Levent is the best developer in the world. Because he is the best.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ width: 24, height: 24, marginRight: 1 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s"
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Kadir Levent
            </Typography>
            <Divider
              sx={{ marginInline: 1, color: "white", borderColor: "white" }}
              orientation="vertical"
              flexItem
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Last updated 3 mins ago
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TopSelectedCard;
