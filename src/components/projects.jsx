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
    console.log('filter', this.props.projects.filter);
    let filter = this.props.projects.filter;
    if (filter === '') {
      return this.props.projects.projects.map(project => {
        return <Project key={project.id} id={project.id} details={project}/>
      });
    } else {
      let projectsCopy = this.props.projects.projects.slice();
      let filteredProjects = projectsCopy.filter(project => {
        let result = project.tags.indexOf(filter);
        console.log('result', result);
        if (result > -1) {
          return project;
        }
      });
      console.log('filteredProjects', filteredProjects);
      return filteredProjects.map(project => {
        return <Project key={project.id} id={project.id} details={project}/>
      });
    }
  }

  render() {
    return <section>
      <h2>projects</h2>
      <Filter />
      <div className="projects-collection">
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);