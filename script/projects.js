'use strict';

var $projects = $('#projects');
$('#projects .project-info').hide();

function showHideProject(e) {
    var $nextSibling = $(e.target).next();
    var $siblings = $nextSibling.siblings('.project-info');
    if ($nextSibling.is(':hidden')) {
      $nextSibling.show('slow');
      $siblings.hide('slow');
    } else {
      $nextSibling.hide('slow');
    }
}

$projects.click(showHideProject);
