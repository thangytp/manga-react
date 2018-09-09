import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <FormContainer/>
        </div>
      </main>
    );
  }
}

export default Main;
