import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateVideo from './components/CreateVideo';
import ShowVideoList from './components/ShowVideoList';
import ShowVideoDetails from './components/ShowVideoDetails';
import UpdateVideoInfo from './components/UpdateVideoInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path='/'
            component={ShowVideoList}
          />
          <Route
            path='/create-video'
            component={CreateVideo}
          />
          <Route
            path='/edit-video/:id'
            component={UpdateVideoInfo}
          />
          <Route
            path='/show-video/:id'
            component={ShowVideoDetails}
          />
        </div>
      </Router>
    );
  }
}

export default App;
