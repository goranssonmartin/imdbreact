import React from "react";
import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import imdbData from "./Data/imdb.json";

let numberOfActors = 5;
let cardGenerator = imdbData.slice(0, numberOfActors);
const addNewActor = () => {
  numberOfActors++;
  cardGenerator = imdbData.slice(0, numberOfActors);
};
const deleteActor = (e) => {
  const whichElementToRemove = e.target.parentElement.parentElement.rowIndex - 1;
  cardGenerator.splice(whichElementToRemove.splice);
};

function App() {
  return (
    <div className="App">
      <Button buttonText="Add new actor" buttonOnClick={addNewActor} />
      <Button buttonText="Sort by name" />
      <Button buttonText="Sort by popularity" />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cardGenerator.map((i) => (
            <Card
              key={cardGenerator.indexOf(i)}
              imageSource={i.pictureUrl}
              name={i.name}
              popularity={i.popularity}
              onClickFunction={deleteActor}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
