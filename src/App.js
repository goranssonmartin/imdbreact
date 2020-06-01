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
const deleteActor = () => {};

function App() {
  return (
    <div className="App">
      <Button buttonText="Add new actor" buttonOnClick={addNewActor} />
      <Button buttonText="Sort by name" />
      <Button buttonText="Sort by popularity" />
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {cardGenerator.map((i) => (
          <Card
            imageSource={i.pictureUrl}
            name={i.name}
            popularity={i.popularity}
            onClickFunction={deleteActor}
          />
        ))}
      </table>
    </div>
  );
}

export default App;
