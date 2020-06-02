import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import imdbData from "./Data/imdb.json";

function App() {
  const [selectedActors, selectActors] = useState(
    imdbData.slice(0, 5).map((actorData) => actorData)
  );

  const addRandomNewActors = () => {
    let randomActorIndex = Math.floor(Math.random() * (imdbData.length - 5));
    let newActorArray = [];
    for (let i = 0; i < 5; i++) {
      newActorArray.push(imdbData[randomActorIndex]);
      randomActorIndex++;
    }
    selectActors(newActorArray);
  };

  const deleteActor = (e) => {
    const whichElementToRemove =
      e.target.parentElement.parentElement.rowIndex - 1;
    const newArray = selectedActors.filter(
      (actorData, index) => index !== whichElementToRemove
    );
    selectActors(newArray);
  };

  const orderByName = () => {
    const newArray = [...selectedActors].sort((a, b) => (a.name > b.name ? 1 : -1));
    selectActors(newArray);
  };

  const orderByPopularity = () => {
    const newArray = [...selectedActors].sort((a, b) => (b.popularity - a.popularity))
    selectActors(newArray);
  };

  return (
    <div className="App">
      <Button
        buttonText="Generate random actors"
        buttonOnClick={addRandomNewActors}
      />
      <Button buttonText="Sort by name" buttonOnClick={orderByName} />
      <Button
        buttonText="Sort by popularity"
        buttonOnClick={orderByPopularity}
      />
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
          {selectedActors.map((i) => (
            <Card
              key={selectedActors.indexOf(i)}
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
