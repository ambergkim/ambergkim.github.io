import React from 'react';
import {connect} from 'react-redux';

import './projects.scss';

import Filter from './filter.jsx';
import Project from './project.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.displayProjects = this.displayProjects.bind(this);
  }

  displayProjects() {
    console.log('props', this.props);
    return this.props.projects.projects.map((project) => {
      return <Project key={project.id} id={project.id} details={project}/>
    });
  }

  render() {
    return <section>
      <h2>projects</h2>
      <Filter />
      <div>
        {this.displayProjects()}
      </div>
    </section>
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    // expenseCreate: val => dispatch(expenseCreate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);