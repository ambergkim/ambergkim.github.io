import React from 'react';
import {connect} from 'react-redux';

import {
  projectsSetFilter
} from '../actions/projects-actions.js';

import './filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.updateFormInput = this.updateFormInput.bind(this);
  }

  updateFormInput(event) {
    this.props.projectsSetFilter(event.target.value);
  }

  render() {
    return <form>
      <select onChange={this.updateFormInput}>
        <option value="" default>select filter --></option>
        <option value="frontend">Front End</option>
        <option value="backend">Back End</option>
        <option value="fullstack">Full Stack</option>
        <option value="javascript">JavaScript</option>
        <option value="react">React</option>
        <option value="redux">Redux</option>
        <option value="mongodb">MongoDB</option>
        <option value="postgresql">PostgreSQL</option>
        <option value="aws">AWS</option>
        <option value="node">Node</option>
        <option value="sass">Sass</option>
        <option value="socket.io">Socket.io</option>
        <option value="user experience">User Experience</option>
        <option value="user interface">User Interface</option>
        <option value="handlebars">Handlebars</option>
      </select>
    </form>
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    projectsSetFilter: val => dispatch(projectsSetFilter(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);