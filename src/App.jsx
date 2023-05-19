import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import People from "./Components/People/People";
import PeopleDetail from "./Components/People/PeopleDetail";
import { useEffect, useState } from "react";
import { fetchPeople, fetchSinglePlanet } from "./Utils/fetch-utils";

function App() {
  // all of our state stuff gets done here
  const [people, setPeople] = useState([]);

  async function handleFetchPeople() {
    const people = await fetchPeople();
    const homeworldPromises = people.map((person) =>
      handleFetchSinglePlanet(person.homeworld)
    );
    const homeworlds = await Promise.all(homeworldPromises);
    const mappedOverPeople = people.map((person, i) => ({
      ...person,
      homeworld: homeworlds[i].name,
      homeworld_url: person.homeworld,
    }));
    setPeople(mappedOverPeople);
    return people;
  }

  async function handleFetchSinglePlanet(url) {
    const response = await fetchSinglePlanet(url);
    return response;
  }

  useEffect(() => {
    handleFetchPeople();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<People people={people} />} />
        <Route path="detail/:id" element={<PeopleDetail people={people} />} />
      </Routes>
    </Router>
  );
}

export default App;
