import React from 'react';
import {connect} from 'react-redux';

import Header from './header.jsx';
import Projects from './projects.jsx';

class HomePage extends React.Component {
  render() {
    return <React.Fragment>
        <Header />
        <Projects />
      </React.Fragment>
  }
}

export default HomePage;