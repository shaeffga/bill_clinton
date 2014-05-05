// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


function life_time()
{
  var date = new Date();
  var cur_year = date.getFullYear();
  var yob = document.getElementById("birth_year").value;
  var years = cur_year - yob;

  document.getElementById("birth_year").innerHTML=(yob);

    // if (yob < cur_year)
    // {
    //   document.getElementById("birth_year").innerHTML=("You were born this year!");
    // }
    // else
    // {
    //   document.getElementById("birth_year").innerHTML=(years);
    // }
  }
