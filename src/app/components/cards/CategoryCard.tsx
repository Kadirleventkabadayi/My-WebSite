import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Box, Card, CardContent, Modal, Typography } from "@mui/material";
import { checkScreenSize } from "@/app/lib/utils";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    // İlk animasyon: card başta küçük ve dönük geliyor
    gsap.from(card, {
      duration: 0.2,
      scale: 0.9,
      rotation: 0,
      ease: "power2.out",
    });

    // content başta görünmez ve döndürülmüş
    gsap.to(content, {
      opacity: 0,
      rotation: -45,
      transformOrigin: "center center", // dönme merkezi
      duration: 0.2,
      ease: "power2.out",
    });

    if (!card || !content) return;

    card.addEventListener("mouseenter", () => {
      // Hover animasyonu: card büyür ve döner
      gsap.to(card, {
        scale: 1,
        rotation: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.2,
        ease: "power2.out",
      });

      // content animasyonu: opacity 1 ve dönüş sıfırlanır
      gsap.to(content, {
        opacity: 1,
        rotation: 0,
        transformOrigin: "center center", // dönüş merkezi yine ortada
        duration: 0.2,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      // Hover'dan çıkınca animasyon: card eski haline gelir
      gsap.to(card, {
        scale: 0.9,
        rotation: 0,
        boxShadow: "none",
        duration: 0.2,
        ease: "power2.out",
      });

      // content animasyonu: tekrar kaybolur ve döner
      gsap.to(content, {
        opacity: 0,
        rotation: -45,
        transformOrigin: "center center",
        duration: 0.2,
        ease: "power2.out",
      });
    });
  }, []);

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      onClick={handleOpen}
      ref={cardRef}
      className={`${
        checkScreenSize() ? "w-[15vh] h-[15vh] m-2" : "w-[15vw] h-[15vw]"
      } bg-cover bg-center rounded-lg scale-[0.9] `}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {checkScreenSize() ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "var(--background)",
              width: "80vw",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" fontWeight="600">
              {title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {description}
            </Typography>
          </Box>
        </Modal>
      ) : (
        <CardContent
          ref={contentRef}
          className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] w-full h-full p-2 box-border bg-[var(--background)] opacity-0 transition-all duration-200 ease-[cubic-bezier(0.23,_1,_0.320,_1)]"
        >
          <Typography
            variant="h6"
            className="m-0 text-[24px] text-[var(--foreground)] font-bold sm:text-[16px] md:text-[20px]"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            className="mt-1 text-[14px] text-[var(--foreground)] leading-[1.4] sm:text-[12px] md:text-[14px]"
          >
            {description}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default CategoryCard;
