import React, { Component } from 'react';
import "./components/FontAwesomeIcon";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { OurServices } from './OurServices';
import { About } from './About';
import { OurTeam } from './OurTeam';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavBar';
import { Footer } from './components/Footer';
import "./App.css";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
        <NavigationBar />
        <Layout>
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/about" component={About} />
              <Route path="/ourteam" component={OurTeam} />
              <Route path="/ourservices" component={OurServices} />
              <Route component={NoMatch} />
            </Switch>
        </Layout>
        <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;