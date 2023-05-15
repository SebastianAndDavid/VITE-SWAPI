import fetch from "cross-fetch";

async function fetchPeople() {
  const data = await fetch("https://www.swapi.tech/api/people");
  const { results } = await data.json();
  console.log("results", results);
  return results;
}

export default fetchPeople;
