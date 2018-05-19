import {combineReducers} from 'redux';

import projectsApp from './projects-app.js'

export default combineReducers({
  projects: projectsApp
});