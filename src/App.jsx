import "./App.css";
import { fetchPeople, fetchPeopleById } from "./utils/fetch-utils";

function App() {
  fetchPeople();
  fetchPeopleById();

  return (
    <>
      <div>Swapi API</div>
    </>
  );
}

export default App;
