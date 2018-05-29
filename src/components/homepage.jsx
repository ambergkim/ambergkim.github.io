import React from 'react';
import {connect} from 'react-redux';

import Header from './header.jsx';
import Projects from './projects.jsx';
import About from './about.jsx';

class HomePage extends React.Component {
  render() {
    return <React.Fragment>
        <Header />
        <Projects />
        <About />
      </React.Fragment>
  }
}

export default HomePage;