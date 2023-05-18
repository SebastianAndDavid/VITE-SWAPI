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

async function fetchFilm(url) {
  if (url === undefined || null) {
    return {};
  } else {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  }
}
async function fetchStarships(url) {
  if (url === undefined || null) {
    return {};
  } else {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  }
}
async function fetchVehicle(url) {
  if (url === undefined || null) {
    return {};
  } else {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  }
}
async function fetchPlanet(url) {
  if (url === undefined || null) {
    return {};
  } else {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  }
}
async function fetchSpecies(url) {
  if (url === undefined || null) {
    return {};
  } else {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  }
}
export {
  fetchPeople,
  fetchSinglePlanet,
  fetchFilm,
  fetchStarships,
  fetchVehicle,
  fetchPlanet,
  fetchSpecies,
};
