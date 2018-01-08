// 'use strict';
// var $projects = $('#d-projects');
// var $navLinks = $('.nav-d-links');

// var AllProjects = {};

// function Project(title, tools, url, github, img, description) {
//   this.title = title;
//   this.tools = tools;
//   this.url = url;
//   this.github = github;
//   this.img = img;
//   this.description = description;
// }

// AllProjects['desgn worth'] = new Project(
//   'desgn worth',
//   ['javascript', 'html', 'flexbox', 'mobile first', 'local storage'],
//   'amgranad.github.io/desgn-worth',
//   'github.com/amgranad/desgn-worth',
//   'img/desgn-worth.gif',
//   'A mobile first website with an interactive form that takes in potential client information and displays an estimate or quote for web design projects.'
// );
// AllProjects['bus mall'] = new Project(
//   'bus mall',
//   ['javascript', 'html', 'css', 'local storage', 'chart.js'],
//   'amgranad.github.io/bus-mall',
//   'github.com/amgranad/bus-mall',
//   'img/bus-mall.png',
//   'A marketing tool that randomizes displaying of products without repeating a product twice in a row or within a set. Chart.js to display results.'
// );
// AllProjects['salmon cookies'] = new Project(
//   'salmon cookies',
//   ['javascript', 'html', 'css'],
//   'amgranad.github.io/cookie-stand',
//   'github.com/amgranad/cookie-stand',
//   'img/salmon-cookies.jpg',
//   'A customer facing website with store information and a marketing tool that randomizes displaying of products without repeating a product twice in a row or within a set. Chart.js to display results for the business owner to review.'
// );

// function displayProject(project) {
//   $projects.show('slow');
//   var $linkedTitle = '<a href=\"http://' + project.url + '\" target=\"_blank\">' + '<h1>' + project.title + '</h1>' + '</a>';
//   $projects.append($linkedTitle);
//   var toolsStr = (project.tools).join(' ');
//   $projects.append('<small>' + toolsStr + '</small>');
//   var imageStr = '<img alt=\"' + project.title + '\" src=\"' + project.img + '\" />';
//   $projects.append(imageStr);
//   $projects.append('<p>' + project.description + '</p>');
//   $projects.append('<a href=\"http://' + project.url + '\" target=\"_blank\">' + '<button>' + 'Demo' + '</button>' + '</a>');
//   $projects.append('<a href=\"http://' + project.github + '\" target=\"_blank\">' + '<button>' + 'Github' + '</button>' + '</a>');
// }

// function displayLinks() {
//   for(var key in AllProjects) {
//     var currentProject = AllProjects[key];
//     $('.nav-d-links').append('<li>' + currentProject.title + '</li>');
//   }
// }

// displayLinks();

// function showHideProjectD(e){
//   var currentText = $(e.target).text();
//   var currentProject = AllProjects[currentText];
//   $('#d-projects').empty();
//   displayProject(currentProject);
// }

// $navLinks.click(showHideProjectD);
