'use strict';

var $drawer = $('#drawer');
var $hamburger = $('.hamburger');
var $cross = $('.cross');
$('#drawer .project-info').hide();
$cross.hide();
$drawer.hide();

$hamburger.click(function(){
  $hamburger.hide('slow');
  $cross.show('slow');
  $drawer.show('slow');
});

$cross.click(function(){
  $cross.hide('slow');
  $hamburger.show('slow');
  $drawer.hide('slow');
});
