import { replaceHyphensWithSpaces, timeAgo } from "@/app/lib/utils";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";

interface SelectedCardProps {
  cardSx?: SxProps<Theme>;
  cardType?: string;
  title: string;
  description: string;
  updated_at: string;
  repoUrl: string;
  imgUrl: string;
}

const SelectedCard = ({
  cardSx,
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
        maxWidth: 700,
        height: "25vh",
        backgroundColor: "var(--background)",
        ...cardSx,
      }}
    >
      <CardActionArea className="flex">
        <CardMedia
          className="h-[25vh] w-[25vh] p-2 rounded-lg"
          component="img"
          image={imgUrl}
          alt="image"
        />
        <CardContent className="flex flex-col justify-between h-[24vh]">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              width: "45%",
              backgroundColor: cardType || "orange",
              p: 0.5,
              borderRadius: 1,
              color: "white",
              fontWeight: "bold",
              fontSize: "0.8rem",
              textAlign: "center",
            }}
          >
            {replaceHyphensWithSpaces(title.toUpperCase())}
          </Typography>
          <Box className="flex flex-col justify-between h-[60%]">
            <Typography
              variant="body2"
              className="h-[40%] text-foreground overflow-hidden text-ellipsis font-bold text-xl mt-1"
            >
              {description} project
            </Typography>

            <Box className="flex items-center mt-auto">
              <Avatar
                className="w-6 h-6 mr-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s"
              />
              <Typography variant="body2" className="font-bold text-foreground">
                Kadir Levent
              </Typography>
              <Divider
                className="mx-2 text-foreground border-foreground"
                orientation="vertical"
                flexItem
              />
              <Typography variant="body2" className="font-bold text-gray-500">
                {timeAgo(updated_at)}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SelectedCard;
