'use strict';

var $projects = $('#projects');
$('#projects .project-info').hide();

function showHideProject(e) {
    var $nextSibling = $(e.target).next();
    var $siblings = $nextSibling.siblings('.project-info');
    if ($nextSibling.is(':hidden')) {
      $nextSibling.slideDown('slow');
      $siblings.slideUp('slow');
    } else {
      $nextSibling.slideUp('slow');
    }
}

$projects.click(showHideProject);
