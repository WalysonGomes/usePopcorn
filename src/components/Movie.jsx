import { CalendarCheck } from "lucide-react";

export default function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>
            <CalendarCheck
              color="#5c84c4"
              size={20}
              style={{ marginTop: "6px" }}
            />
          </span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
