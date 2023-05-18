async function fetchPeople() {
  const data = await fetch("https://swapi.dev/api/people");
  const { results } = await data.json();
  return results;
}

async function fetchSinglePlanet(url) {
  const data = await fetch(url);
  const result = await data.json();
  return result;
}

async function fetchFilm() {
  const data = await fetch("https://swapi.dev/api/films/1/");
  const res = await data.json();
  console.log("res", res);
  return res;
}

export { fetchPeople, fetchSinglePlanet, fetchFilm };
