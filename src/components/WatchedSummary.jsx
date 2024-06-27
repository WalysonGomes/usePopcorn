import { Film, Star, Sparkles, Hourglass } from "lucide-react";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>
            <Film color="#fff" style={{ marginTop: "6px" }} />
          </span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>
            <Star color="#edc834" fill="#edc834" style={{ marginTop: "6px" }} />
          </span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>
            <Sparkles
              color="#edc834"
              fill="#edc834"
              style={{ marginTop: "6px" }}
            />
          </span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>
            <Hourglass color="#5cc45e" style={{ marginTop: "6px" }} />
          </span>
          <span>{avgRuntime.toFixed(0)} min</span>
        </p>
      </div>
    </div>
  );
}
