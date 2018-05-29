import React from 'react';
import {connect} from 'react-redux';

import './about.scss';

class About extends React.Component {

  render() {
    return <section id="about-section">
      <h1>About Me</h1>
      <div id="about-links">
        <a href="mailto:amber@amberkimdesign.com">Email</a> | <a href="https://www.linkedin.com/in/ambergkim/">LinkedIn</a> | <a href="https://github.com/ambergkim">GitHub</a> | <a href="https://docs.google.com/document/d/18TJfPpLyXWLke-iZx0MA0V2IJn9cA8BvoQGr4VBfiu0/edit?usp=sharing">Resume</a>
      </div>
      <p>
      I am a Software Developer with experience building both front-end and back-end applications, a background in Web Design as well as marketing and building businesses. My experience gives me a more holistic perspective on how I build applications.
      </p>
      <p>
      My exposure to software development started with my parents who encouraged us to pursue learning about technologies. I watched them solder motherboards and create programs I could run through the command line or load using floppy disks.
      </p>
      <p>
      When I was young, my parents didn’t have the same opportunities in the Philippines that I do now. Also, as a former Marine Corps spouse who did not have a lot of opportunities to grow a career, I see a lot of potential in tech to lift people up. Being able to work with computers, having the discipline for doing my own research, self-learning, and troubleshooting enabled me to start a business and having meaningful work I could bring with me through relocations.
      </p>
      <p>
      My goals include giving back to the tech community as a whole, contributing to diversifying the tech culture and also improving the quality of life for people around me. One of the ways I have started working towards this goal is by volunteering as a Free Code Camp local leader.
      </p>
    </section>
  }
}

export default About;