import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { Modal, Box } from "@mui/material";

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  description,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        width: "15vw",
        overflow: "hidden",
        bgcolor: "white",
        borderRadius: 2,
        userSelect: "none",
      }}
    >
      <Card
        sx={{
          position: "relative",
          color: "var(--background)",
          backgroundColor: "var(--on-background)",
          borderRadius: 2,
        }}
        onClick={handleOpen}
      >
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6446953781512605) 23%, rgba(0,0,0,0.15730042016806722) 47%, rgba(0,0,0,0.04805672268907568) 74%, rgba(0,0,0,0) 100%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "10%",
              border: "white solid 1px",
              mb: "5%",
              marginInline: "2%",
            }}
          />
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "white", userSelect: "none" }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              width: "10%",
              border: "white solid 1px",
              mb: "5%",
              marginInline: "2%",
            }}
          />
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "var(--background)",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{description}</Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default CategoryCard;
