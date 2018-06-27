import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NewManga from './components/manga/NewManga';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <NewManga />
          </div>
          <div className="col-md-6">
            Display Mangas
          </div>
        </div>
      </div>
    );
  }
}

export default App;
