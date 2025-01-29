import { replaceHyphensWithSpaces, timeAgo } from "@/app/lib/utils";
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
  desciption: string;
  updated_at: string;
  repoUrl: string;
  imgUrl: string;
}

const SelectedCard = ({
  cardSx,
  cardType,
  title,
  desciption,
  updated_at,
  repoUrl,
  imgUrl,
}: SelectedCardProps) => {
  console.log(updated_at);
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
          image={imgUrl}
          alt="green iguana"
        />
        <CardContent
          sx={{
            height: "24vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "60%",
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
                fontSize: "1.2rem",
                mt: 1,
              }}
            >
              {desciption} project
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

export default SelectedCard;
