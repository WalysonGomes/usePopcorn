import { ChevronLeft, Star, ListPlus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { useKey } from "../useKey";

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  KEY,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

  const countRef = useRef(0);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey("Escape", onCloseMovie);

  useEffect(() => {
    if (userRating) {
      countRef.current++;
    }
  }, [userRating]);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?&apikey=${KEY}&i=${selectedId}`,
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId, KEY],
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title],
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              <ChevronLeft />
            </button>

            <img src={poster} alt={`Poster of ${title} movie`} />

            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>
                  <Star
                    size={18}
                    color="#edc834"
                    fill="#edc834"
                    style={{ marginTop: "6px" }}
                  />
                </span>
                {imdbRating}
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <span style={{ alignSelf: "center" }}>
                    <StarRating maxRating={10} onSetRating={setUserRating} />
                  </span>
                  {userRating > 0 && (
                    <button
                      className="btn-add"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "4px",
                        justifyContent: "center",
                      }}
                      onClick={handleAdd}
                    >
                      <ListPlus size={20} />
                      Add to list
                    </button>
                  )}
                </>
              ) : (
                <p style={{ alignSelf: "center" }}>
                  You rated this movie {watchedUserRating}
                  {"  "}
                  <Star
                    size={18}
                    color="#edc834"
                    fill="#edc834"
                    style={{ marginBottom: "-3px" }}
                  />
                </p>
              )}
            </div>
            <em>{plot}</em>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
