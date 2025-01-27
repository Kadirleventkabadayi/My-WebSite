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

interface SelectedCardProps {
  cardSx?: SxProps<Theme>;
  cardType?: string;
  title: string;
}

const SelectedCard = ({ cardSx, cardType, title }: SelectedCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 700,

        height: "25vh",
        backgroundColor: "var(--background)",
        ...cardSx,
      }}
    >
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          sx={{
            height: "25vh",
            width: "25vh",
            p: 1,
            borderRadius: 3,
            ...cardSx,
          }}
          component="img"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s"
          alt="green iguana"
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              width: "25%",
              backgroundColor: cardType || "orange",
              p: 0.5,
              borderRadius: 1,
              color: "white",
              fontWeight: "bold",
              fontSize: "0.8rem",
              textAlign: "center",
            }}
          >
            {title.toUpperCase()}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              height: "40%",
              color: "var(--foreground)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontWeight: "bold",
              fontSize: "1.2rem",
              mt: 1,
            }}
          >
            Levent is the best developer in the world. Because he is the best.
            For these reasons, he is the best.
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
              Last updated 3 mins ago
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SelectedCard;
