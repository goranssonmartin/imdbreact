import React from "react";
import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import imdbData from "./Data/imdb.json";

function App() {
  return (
    <div className="App">
      <Button buttonText="Add new actor" />
      <Button buttonText="Sort by name" />
      <Button buttonText="Sort by popularity" />
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        <Card />
      </table>
    </div>
  );
}

export default App;
