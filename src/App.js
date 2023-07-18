import React from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import MyNavbar from "./component/navbar/MyNavbar";
import Header from "./component/header/Header";
import MyCard from "./component/main/MyCard";
import data from "./helper/data";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Header />
      <MyCard data={data} />
    </div>
  );
}

export default App;
