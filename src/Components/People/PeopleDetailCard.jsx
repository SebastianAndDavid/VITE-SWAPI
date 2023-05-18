import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchFilm,
  fetchSpecies,
  fetchStarships,
  fetchVehicle,
} from "../../Utils/fetch-utils";

/* eslint-disable react/prop-types */
export default function PeopleDetailCard({ people }) {
  const { id } = useParams();
  const singlePerson = people.find((person) => person.height === id);
  console.log("singlePerson", singlePerson);
  const [film, setFilm] = useState({});
  const [starship, setStarship] = useState({});
  const [vehicles, setVehicles] = useState({});
  const [planet, setPlanet] = useState({});
  const [species, setSpecies] = useState({});

  console.log("species", species);

  const urlFilm = singlePerson.films[0];
  const urlStarship = singlePerson.starships[0];
  const urlVehicle = singlePerson.vehicles[0];
  const urlPlanet = singlePerson.homeworld_url;
  const urlSpecies = singlePerson.species[0];

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
  async function handleFetchSingleVehicle(urlVehicle) {
    const vehicle = await fetchVehicle(urlVehicle);
    setVehicles(vehicle);
    return vehicle;
  }
  async function handleFetchSinglePlanet(urlPlanet) {
    const planet = await fetchVehicle(urlPlanet);
    setPlanet(planet);
    return planet;
  }
  async function handleFetchSingleSpecies(urlSpecies) {
    const species = await fetchSpecies(urlSpecies);
    setSpecies(species);
    return species;
  }

  useEffect(() => {
    handleFetchSingleFilm(urlFilm);
    handleFetchSingleStarship(urlStarship);
    handleFetchSingleVehicle(urlVehicle);
    handleFetchSinglePlanet(urlPlanet);
    handleFetchSingleSpecies(urlSpecies);
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
      <div className="detail-card">
        <h5>{vehicles.name}</h5>
        <p>Manufacturer: {vehicles.manufacturer}</p>
        <p>Model: {vehicles.model}</p>
        <p>Class: {vehicles.vehicle_class}</p>
      </div>
      <div className="detail-card">
        <h5>{planet.name}</h5>
        <p>Climate: {planet.climate}</p>
        <p>Population: {planet.population}</p>
        <p>Terrain: {planet.terrain}</p>
      </div>
      <div className="detail-card">
        <h5>{species.name}</h5>
      </div>
    </div>
  );
}
