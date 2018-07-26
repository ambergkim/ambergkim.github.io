import React from 'react';

import FontAwesome from 'react-fontawesome';

import './header.scss';

class Header extends React.Component {

  render() {
    return <header>
        <nav class="header-nav">
          <img src="/src/images/amber-kim-logo.png" alt="Amber Kim Logo" id="logo"/>
          <div class="nav-links">
            <a id="about-link" href="#about-section">
              <FontAwesome name="user" size="2x" />
            </a>
            <a href="mailto:amber@amberkimdesign.com">
              <FontAwesome name="envelope" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/ambergkim/">
              <FontAwesome name="users" size="2x" />
            </a>
            <a href="https://github.com/ambergkim">
              <FontAwesome name="code" size="2x" />
            </a>
            <a href="https://docs.google.com/document/d/18TJfPpLyXWLke-iZx0MA0V2IJn9cA8BvoQGr4VBfiu0/edit?usp=sharing">
              <FontAwesome name="file" size="2x" />
            </a>
          </div>
        </nav>
        <div id="hero-block">
          <img src="/src/images/amber-kim-circle.png" alt="Amber Kim Avatar" id="avatar"/>
          <div className="cta-block">
            <h1>Software Developer</h1>
            <h3>Background in Web Design + Marketing</h3>
            <a href="mailto:amber@amberkimdesign.com">
              <button className="cta-btn">connect</button>
            </a>
          </div>
        </div>
      </header>
  }
}

export default Header;