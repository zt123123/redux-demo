import React, { Component } from 'react';

import Header from "./header"
import Footer from "./footer"

import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <Footer />
      </div>
    );
  }
}