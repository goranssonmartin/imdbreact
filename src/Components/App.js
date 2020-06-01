import React from "react";
import "../Styling/App.css";
import Button from "./Button";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Button />
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
