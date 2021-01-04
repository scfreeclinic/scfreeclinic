import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import "./components/FontAwesomeIcon";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { OurServices } from "./OurServices";
import { About } from "./About";
import { OurTeam } from "./OurTeam";
import { CoreValues } from "./CoreValues";
import { Newsletter } from "./Newsletter";
import { Blogs } from "./Blogs";
import { NoMatch } from "./NoMatch";
import { InternApp } from "./InternApp";
import { DonorsAndSponsors } from "./DonorsAndSponsors";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MetaTags>
          <div className="wrapper">
            <title>Santa Cruz Free Clinic</title>
            <meta name="description" content="Santa Cruz Free Clinic is dedicated to fighting healthcare disparities in the Santa Cruz community by providing access to first step healthcare. We strive to provide compassionate and accessible healthcare and resources to those who may be experiencing houselessness or other difficult conditions at this time." />
            {/* <meta property="og:title" content="MyApp" /> */}
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
          </div>
        </MetaTags>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/about" component={About} />
              <Route path="/our_team" component={OurTeam} />
              <Route path="/our_services" component={OurServices} />
              <Route path="/core_values" component={CoreValues} />
              <Route path="/intern_application" component={InternApp} />
              <Route path="/donors_and_sponsors" component={DonorsAndSponsors} />
              <Route path="/newsletter" component={Newsletter} />
              <Route path="/blogs" component={Blogs} />
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
