'use strict';
var $projects = $('#d-projects');
var $navLinks = $('.nav-d-links');

$projects.hide();

var AllProjects = {};

function Project(title, tools, url, img, description) {
  this.title = title;
  this.tools = tools;
  this.url = url;
  this.img = img;
  this.description = description;
}

AllProjects['desgn worth'] = new Project(
  'desgn worth',
  ['javascript', 'html', 'flexbox', 'mobile first', 'local storage'],
  'amgranad.github.io/desgn-worth',
  'img/desgn-worth.gif',
  'A mobile first website with an interactive form that takes in potential client information and displays an estimate or quote for web design projects.'
);
AllProjects['bus mall'] = new Project(
  'bus mall',
  ['javascript', 'html', 'css', 'local storage', 'chart.js'],
  'amgranad.github.io/bus-mall',
  'img/bus-mall.png',
  'A marketing tool that randomizes displaying of products without repeating a product twice in a row or within a set. Chart.js to display results.'
);
AllProjects['salmon cookies'] = new Project(
  'salmon cookies',
  ['javascript', 'html', 'css'],
  'amgranad.github.io/salmon-cookies',
  'img/salmon-cookies.jpg',
  'A customer facing website with store infomration and a marketing tool that randomizes displaying of products without repeating a product twice in a row or within a set. Chart.js to display results for the business owner to review.'
);

function displayProject(project) {
  $projects.show('slow');
  $projects.append('<h1>' + project.title + '</h1>');
  var toolsStr = (project.tools).join(' ');
  $projects.append('<small>' + toolsStr + '</small>');
  var imageStr = '<img alt=\"' + project.title + '\" src=\"' + project.img + '\" />';
  $projects.append(imageStr);
  $projects.append('<p>' + project.description + '</p>');
}

function displayLinks() {
  for(var key in AllProjects) {
    var currentProject = AllProjects[key];
    $('.nav-d-links').append('<li>' + currentProject.title + '</li>');
  }
}

displayLinks();

function showHideProjectD(e){
  var currentText = $(e.target).text();
  var currentProject = AllProjects[currentText];
  $('#d-projects').empty();
  displayProject(currentProject);
}

$navLinks.click(showHideProjectD);
