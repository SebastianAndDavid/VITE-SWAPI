async function fetchPeople() {
  const data = await fetch("https://www.swapi.tech/api/people");
  const { results } = await data.json();
  return results;
}
async function fetchPeopleById(id) {
  const data = await fetch(`https://www.swapi.tech/api/people/${id}`);
  const { result } = await data.json();
  const { properties } = result;
  return properties;
}

export { fetchPeople, fetchPeopleById };
