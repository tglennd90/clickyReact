import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Display from "./components/Display";

function App() {
  return (
    <div className="container">
      <Header />
      <Jumbotron />

      <Display />

      <Footer />
    </div>
  );
}

export default App;
