import React from "react";
import "./styles.css";
import Star from "./Star";

export default function App() {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = React.useState(0);
  return (
    <div className="App">
      Star rating component <br />
      <br />
      <br />
      <div
        style={{
          display: "inline-flex"
        }}
      >
        {stars.map((star, i) => {
          return (
            <Star
              key={i}
              rating={rating}
              onMouseEnter={() => setRating(i)}
              onMouseLeave={() => setRating(0)}
            />
          );
        })}
      </div>
    </div>
  );
}
