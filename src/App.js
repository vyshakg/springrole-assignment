import React, { Component } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default App;
