import { CircleX } from "lucide-react";

export default function ErrorMessage({ message }) {
  return (
    <p className="error" style={{ display: "flex", flexDirection: "row" }}>
      <span>
        <CircleX color="#fa5252" size={30} />
      </span>
      {message}
    </p>
  );
}
