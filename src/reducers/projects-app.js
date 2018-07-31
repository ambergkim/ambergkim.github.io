// import {
//   WORD_CREATE,
//   WORD_RANDOM,
// } from '../actions/word-card-actions.js';
import uuidv1 from 'uuid/v1';
import { PROJECTS_FILTER } from '../actions/projects-actions';

const initialState = {
  projects: [
    {
      title: 'Nouri Meals',
      id: uuidv1(),
      imageUrl: '/src/images/nouri.png',
      demoUrl: 'https://nourimeals.herokuapp.com/',
      gitHubUrl: 'https://github.com/nourimeals/nouri',
      tags: ['mongodb', 'javascript', 'node', 'frontend', 'backend', 'user experience', 'user interface', 'html', 'css', 'react', 'redux', 'fullstack'],
      description: 'In the fight to solve hunger in the Greater Seattle Area. A project began during AngelHack Seattle 2018.',
      contribution: 'Ideation, team formation, planning, branding, wireframes & mockup design, architecture, project managemet, pair programming, presentation.'
    },
    {
      title: 'Pathfinder.vet',
      id: uuidv1(),
      imageUrl: '/src/images/pathfinder.png',
      demoUrl: 'http://pathfinder.vet/',
      gitHubUrl: 'https://github.com/pathfindertech',
      tags: ['mongodb', 'javascript', 'node', 'webpack', 'frontend', 'backend', 'user experience', 'user interface', 'handlebars', 'html', 'css', 'fullstack'],
      description: 'Empowering veterans and families through sharing of information and experiences.',
      contribution: 'Modernized user-facing interfaces through UI and brand redesign, streamlined customer traction through improved user experience and communicating company value through storytelling. Built new customer and admin facing features.'
    },
    {
      title: 'QLaunch Questions',
      id: uuidv1(),
      imageUrl: '/src/images/qlaunch.jpg',
      demoUrl: 'https://qlaunch.herokuapp.com/',
      gitHubUrl: 'https://github.com/qlaunch/questions',
      tags: ['react', 'socket.io', 'mongodb', 'javascript', 'node', 'webpack', 'sass', 'babel', 'frontend', 'backend', 'fullstack'],
      description: 'A live question polling application. Great for meetings, town halls... Anytime people want to ask questions.',
      contribution: 'Responsible for project management, troubleshooting, writing both front end and back end code, tests, brand, styles, and documentation.'
    },
    {
      title: 'Amber Kim Portfolio',
      id: uuidv1(),
      imageUrl: '/src/images/portfolio.png',
      demoUrl: 'https://ambergkim.github.io/',
      gitHubUrl: 'https://github.com/ambergkim/ambergkim.github.io',
      tags: ['react', 'redux', 'javascript', 'node', 'webpack', 'sass', 'frontend'],
      description: 'This portfolio site. Project Filtering.',
      contribution: 'Built from the ground up.'
    },
    {
      title: 'Sight Words',
      id: uuidv1(),
      imageUrl: '/src/images/sightwords.png',
      demoUrl: 'https://ambergkim.github.io/sightwords/',
      gitHubUrl: 'https://github.com/ambergkim/sightwords',
      tags: ['react', 'redux', 'javascript', 'node', 'webpack', 'sass', 'frontend'],
      description: 'Help kids learn how to read. A small react/redux Sight Words App that generates random words and reads it to kids.',
      contribution: 'Responsible for building the app from the ground up.'
    },
    {
      title: 'KidCast',
      id: uuidv1(),
      imageUrl: '/src/images/kidcast.png',
      demoUrl: 'https://kidcast.herokuapp.com/api/media',
      gitHubUrl: 'https://github.com/kidcast/media',
      tags: ['javascript', 'node', 'mongodb', 'heroku', 'travisci', 'aws', 'jasonwebtoken', 'rest', 'backend'],
      description: 'A YouTube-like Back End Node.js application designed to only display kid friendly content.',
      contribution: 'Produced & managed the entire project with the ability to keep the project timeline, meet MVP & stretch goals. Built the bulk of the code, resource RESTful API’s & wrote API tests while assisting teammates on their tasks through pair programming & code reviews.'
    },
    {
      title: 'Avalance Forecast',
      id: uuidv1(),
      imageUrl: '/src/images/avalanche.png',
      demoUrl: 'http://teamavalanche.us/',
      gitHubUrl: 'https://github.com/TeamAvalanche',
      tags: ['javascript', 'handlebars', 'superagent', 'heroku', 'postgresql', 'cheerio', 'frontend', 'backend', 'fullstack'],
      description: 'The NWAC website has robust information but it is not as easy to get a quick glance of Avalanche forecasts. This Full Stack app gets quick avalanche risk information in the hands of users on the go, helping them be safer when trekking up back mountains.',
      contribution: 'Leader in building the separate Back & Front end clients & was instrumental in keeping the project moving to meet goals & deadlines. Supported team members when they run into roadblocks and walked them through writing the code as the navigator during pair programming sessions.'
    },
    {
      title: 'FCC Redmond Website',
      id: uuidv1(),
      imageUrl: '/src/images/fccredmond.png',
      demoUrl: 'https://fcc-redmond.github.io/website-client/',
      gitHubUrl: 'https://github.com/FCC-Redmond/',
      tags: ['javascript', 'node', 'mongodb', 'heroku', 'jquery', 'jasonwebtoken', 'frontend', 'backend', 'fullstack'],
      description: 'An ongoing Full Stack application with separate Client & Server that implements CRUD operations. Back End implements JWT while the Front End presents the filterable member information.',
      contribution: 'Instrumental in getting the project off the ground & moving from ideation, Planning, Project Management, Design, & Server & Client side code & architecture. Leader in code reviews & collaboration. Designed assignments to help new members learn HTML & CSS.'
    },
  ],
  filter: ''
}

export default function wordCardReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};

  switch(action.type) {
    case PROJECTS_FILTER:
      return Object.assign(newState, state, {filter: action.value});
    default: return state;
  }
}