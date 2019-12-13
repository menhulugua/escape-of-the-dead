import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Game from './Game';
import Instruction from './Instruction';


class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Game} />
          <Route path="/instruction" component={Instruction} />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
