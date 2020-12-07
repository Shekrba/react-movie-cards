import React, { Component } from 'react';

import Header from './Header';
import Movies from './Movie/Movies';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

export default class App extends Component {
  state = {
    title: 'React Movie Cards',
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Movies />
        </div>
      </div>
    );
  }
}
