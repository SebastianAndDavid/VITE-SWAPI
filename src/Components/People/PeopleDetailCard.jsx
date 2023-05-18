import { useEffect, useState } from "react";
import { fetchFilm } from "../../Utils/fetch-utils";

/* eslint-disable react/prop-types */
export default function PeopleDetailCard({ people }) {
  const [film, setFilm] = useState({});

  async function handleFetchSingleFilm() {
    const film = await fetchFilm();
    setFilm(film);
    return film;
  }

  useEffect(() => {
    handleFetchSingleFilm();
  }, []);

  return (
    <div>
      <div className="film-card">
        <h5>{film.title}</h5>
        <p>{film.director}</p>
        <p>{film.producer}</p>
        <p>{film.release_date}</p>
      </div>
    </div>
  );
}
