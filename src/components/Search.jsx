import { useRef } from "react";
import { useKey } from "../useKey";

export default function Search({ query, setQuery }) {
  function handleSetQuery(query) {
    setQuery(query);
  }

  const inputEl = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => handleSetQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
