'use strict';

var $hamburger = $('.hamburger');
var $cross = $('.cross');
var $drawer = $('.drawer');

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
