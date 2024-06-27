import Star from "./Star";
import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "18px",
};

const starsContainerStyle = {
  display: "flex",
  marginTop: "3px",
};

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 26,
  onSetRating,
}) {
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starsContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={rating >= i + 1}
            color={color}
            size={size}
            onSetRating
          />
        ))}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
}
