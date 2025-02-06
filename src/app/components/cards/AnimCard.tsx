interface AnimCardProps {
  imageSrc: string;
  position: "left" | "right";
}

const AnimCard: React.FC<AnimCardProps> = ({ imageSrc, position }) => {
  return (
    <div
      className={`card card-${position}`}
      style={{
        position: "relative",
        width: "40%",
        height: "360px",
        borderRadius: "0.75em",
        overflow: "hidden",
        willChange: "transform",
      }}
    >
      <img
        className="card-image"
        src={imageSrc}
        alt={`Card ${position}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default AnimCard;
