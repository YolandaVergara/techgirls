import React from 'react';
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Legacy from './Legacy';
import PersonalData from './PersonalData';
import Inform from './Inform';
import "../stylesheets/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.renderLegacy = this.renderLegacy.bind(this);
    this.renderInform = this.renderInform.bind(this);
  }



  handleButton(props) {
    this.renderLegacy();
  }
  renderLegacy(props) {
    return <Legacy />
  }
  renderPersonalData(props) {
    return <PersonalData />
  }
  renderInform(props) {
    return <Inform />
  }

  render() {
    return (
      <Fragment >
        <Switch>
          <Route exact path='/'>
            <div className="container">
              <Header />
              <Nav />
            </div>
          </Route>
          <Route path='/legacy/' render={this.renderLegacy} />
          <Route path='/personal-data/' render={this.renderPersonalData} />
          <Route path='/inform/' render={this.renderInform} />
        </Switch>
      </Fragment>
    );
  }
}





export default App;
