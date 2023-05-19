/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import "./People.css";
import PeopleDetailCard from "./PeopleDetailCard";

function PeopleDetail({ people }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const singlePerson = people.find((person) => person.height === id);

  return (
    <div className="detail-page">
      <header>
        <div className="button" onClick={() => navigate("/")}>
          Go Back
        </div>
      </header>
      <h4>Check out {singlePerson.name}s details!</h4>
      <div className="detail-container">
        <div className="people-detail-card">
          {/* this should be a reusable component */}
          <h5>{singlePerson.name}</h5>
          <p>Birthday: {singlePerson.birth_year}</p>
          <p>Gender: {singlePerson.gender}</p>
          <p>Height: {singlePerson.height}</p>
          <p>Mass: {singlePerson.mass}</p>
          <p>Homeworld: {singlePerson.homeworld}</p>
        </div>
        <PeopleDetailCard people={people} />
      </div>
    </div>
  );
}

export default PeopleDetail;
