function dropErase() {
  $(document).click(function(){

    $('li').find('.dropdown').removeClass('show');

  });
}

function domControl() {
  $('.dropdown').click(function(dropErase) {
    dropErase.stopPropagation();
  });
}

function dropDisplay() {
  $('li').mouseover(function(){
    
    var dropdown = $('li').find('.dropdown');
    var activeDrop = $(this).find('.dropdown');

    dropdown.removeClass('show');
    activeDrop.addClass('show');
  });
}

function init() {

  domControl()
  dropErase()
  dropDisplay();
}

$(document).ready(init);