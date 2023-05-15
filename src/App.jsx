import "./App.css";
import fetchPeople from "./utils/fetch-utils";

function App() {
  fetchPeople();

  return (
    <>
      <div>Swapi API</div>
    </>
  );
}

export default App;
