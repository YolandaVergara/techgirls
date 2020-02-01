import React from 'react';
import { Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Legacy from './Legacy';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: ''
    };
    this.handleButton = this.handleButton.bind(this);
    this.renderLegacy = this.renderLegacy.bind(this);
  }
  handleButton(props) {
    this.renderLegacy();
  }
  renderLegacy(props) {
    debugger;
    console.log('Ha entrado!!')
    return <Legacy />

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <header />
            <div className="App"> Hola
              </div>
            <button>
              <Link to="/legacy/">click</Link>
            </button>
          </Route>
          <Route path='/legacy/' render={this.renderLegacy} />
        </Switch>
      </div >
    );
  }
}

export default App;
