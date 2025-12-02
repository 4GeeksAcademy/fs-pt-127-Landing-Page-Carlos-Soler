import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import UserCard from "./components/userCard/UserCard";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <UserCard />

      <footer className="bg-dark text-white text-center py-3">
        Copyright © Your Website 2019
      </footer>
    </>
  );
};

export default App;

