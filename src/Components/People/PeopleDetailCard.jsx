import { useEffect, useState } from "react";
import { fetchFilm, fetchStarships } from "../../Utils/fetch-utils";

/* eslint-disable react/prop-types */
export default function PeopleDetailCard({ people }) {
  const [film, setFilm] = useState({});
  const [starship, setStarship] = useState({});

  console.log("starship", starship);

  const urlFilm = people[0].films[0];
  const urlStarship = people[0].starships[0];

  async function handleFetchSingleFilm(urlFilm) {
    const film = await fetchFilm(urlFilm);
    setFilm(film);
    return film;
  }

  async function handleFetchSingleStarship(urlStarship) {
    const starship = await fetchStarships(urlStarship);
    setStarship(starship);
    return starship;
  }

  useEffect(() => {
    handleFetchSingleFilm(urlFilm);
    handleFetchSingleStarship(urlStarship);
  }, []);

  return (
    <div>
      <div className="detail-card">
        <h5>{film.title}</h5>
        <p>{film.director}</p>
        <p>{film.producer}</p>
        <p>{film.release_date}</p>
      </div>
      <div className="detail-card">
        <h5>{starship.name}</h5>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Model: {starship.model}</p>
        <p>Class: {starship.starship_class}</p>
      </div>
    </div>
  );
}
