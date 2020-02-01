import React from 'react';
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import "../stylesheets/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment >
        <div className="container">


          <Header />
          <Nav />
        </div>

      </Fragment>
    );
  }
}

export default App;
