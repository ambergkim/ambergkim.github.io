import React from 'react';
import {connect} from 'react-redux';

import './header.scss';

class Header extends React.Component {

  render() {
    return <header>
        <img src="/src/images/amber-kim-logo.png" alt="Amber Kim Logo" id="logo"/>
        <div id="hero-block">
          <img src="/src/images/amber-kim-circle.png" alt="Amber Kim Avatar" id="avatar"/>
          <div className="cta-block">
            <h1>Full Stack JavaScript Developer</h1>
            <h3>Doer | Lifelong Learner</h3>
            <a href="mailto:amber@amberkimdesign.com">
              <button className="cta-btn">let's connect</button>
            </a>
          </div>
        </div>
      </header>
  }
}

export default Header;