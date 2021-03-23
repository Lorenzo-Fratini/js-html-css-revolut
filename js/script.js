function dropErase() {
  $(document).click(function(){

    $('.droppable').find('.dropdown').removeClass('show');

  });
}

function domControl() {
  $('.dropdown').click(function(dropErase) {
    dropErase.stopPropagation();
  });
}

function dropDisplay() {
  $('.droppable').mouseover(function(){
    
    var dropdown = $('.droppable').find('.dropdown');
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