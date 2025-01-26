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

const SelectedCard = () => {
  return (
    <Card sx={{ maxWidth: 500, m: 2 }}>
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          sx={{ maxWidth: 140, m: 1, borderRadius: 2 }}
          component="img"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s"
          alt="green iguana"
        />
        <CardContent
          sx={{ height: 140, display: "flex", flexDirection: "column" }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              width: "fit-content",
              backgroundColor: "#c039a3",
              p: 0.3,
              borderRadius: 2,
              color: "white",
            }}
          >
            Levent
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
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
            <Typography variant="body2" color="text.secondary">
              Kadir Levent
            </Typography>
            <Divider sx={{ marginInline: 1 }} orientation="vertical" flexItem />
            <Typography variant="body2" color="text.secondary">
              Last updated 3 mins ago
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SelectedCard;
