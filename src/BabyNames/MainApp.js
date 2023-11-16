import React, { useState } from "react";
import babydata from "./data.json";
import "./babyNames.css";

function MainApp() {
  const [data, setData] = useState(babydata);
  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteNames, setFavoriteNames] = useState([]);
  const [filteredGender, setfilteredGender] = useState("all");

  const addFavorite = (name, sex) => {
    if (!favoriteNames.find((favorite) => favorite.name === name)) {
      setFavoriteNames([...favoriteNames, { name, sex }]);
      setData(data.filter((babyName) => babyName.name !== name));
    }
  };

  const removeFromFavorites = (name) => {
    setFavoriteNames(
      favoriteNames.filter((favorite) => favorite.name !== name)
    );
  };

  const favoritesList = favoriteNames.map((favoriteName) => (
    <p
      key={favoriteName.name}
      onClick={() => removeFromFavorites(favoriteName.name)}
      className="favoriteName"
      style={{
        backgroundColor: favoriteName.sex === "f" ? "pink" : "dodgerblue",
      }}
    >
      {favoriteName.name}
    </p>
  ));

  const filterByGender = (gender) => {
    setfilteredGender(gender);
  };
  return (
    <div className="main-container">
      <div className="btn-input">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="Search for a name..."
          value={searchTerm}
        />
        <div className="btns">
          <button id="all" onClick={() => filterByGender("all")}>
            All
          </button>
          <button id="female" onClick={() => filterByGender("f")}>
            Female
          </button>
          <button id="male" onClick={() => filterByGender("m")}>
            Male
          </button>
        </div>
      </div>
      <div className="favorite">
        <h1 className="favorite-para">Favorite:</h1>
        <p className="fav-list">{favoritesList}</p>
      </div>
      <div className="names-displayed">
        {data
          .filter((names) =>
            filteredGender === "all" ? true : names.sex === filteredGender
          )
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((names) => names.name.toLowerCase().includes(searchTerm))
          .map((names) => {
            const styles = {
              backgroundColor: names.sex === "f" ? "pink" : "dodgerblue",
            };
            return (
              <p
                key={names.id}
                style={styles}
                onClick={() => addFavorite(names.name, names.sex)}
              >
                {names.name}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default MainApp;
