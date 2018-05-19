import React from 'react';
import {connect} from 'react-redux';

import './project.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.displayTags = this.displayTags.bind(this);
  }

  displayTags() {
    return this.props.details.tags.reduce((accum, tag) => {
      return accum + ' | ' + tag;
    });
  }

  render() {
    return <div className="project">
      <img src={this.props.details.imageUrl} alt={this.props.details.title}/>
      <div className="details">
        <h2 className="project-title">{this.props.details.title}</h2>
        <small>{this.displayTags()}</small>
        <h4>description</h4>
        <p>{this.props.details.description}</p>
        <h4>contribution</h4>
        <p>{this.props.details.contribution}</p>
        <div className="project-links">
          <a href={this.props.details.demoUrl}>
            <button>Live Demo</button>
          </a>
          <a href={this.props.details.gitHubUrl}>
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </div>
  }
}

export default Project;