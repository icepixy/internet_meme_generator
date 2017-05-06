var main = function() {
  $('#top-text').keyup(function() {
  var toAdd = $("#top-text").val(); 
  toAdd = $('h1.top-caption').text();
  }
$('#bottom-text').keyup(function() {
  var toAdd = $("#bottom-text").val(); 
  toAdd = $('h1.bottom-caption').text();
  }
$('#image-url').keyup(function() {
  var toAdd = $("#image-url").val(); 
  toAdd = $('img.bottom-caption').attr(src);
  }

};

$(document).ready(main);