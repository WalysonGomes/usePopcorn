import { X, Star, Sparkles, Hourglass } from "lucide-react";

export default function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>
            <Star
              size={18}
              color="#edc834"
              fill="#edc834"
              style={{ marginTop: "6px" }}
            />
          </span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>
            <Sparkles
              size={18}
              color="#edc834"
              fill="#edc834"
              style={{ marginTop: "6px" }}
            />
          </span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>
            <Hourglass size={18} color="#5cc45e" style={{ marginTop: "6px" }} />
          </span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          <X size={14} color="#ffff" absoluteStrokeWidth={"desabled"} />
        </button>
      </div>
    </li>
  );
}
