function dropErase() {

    $('.droppable').find('.dropdown').removeClass('show');
}

function domControl() {
  $('.dropdown').click(function(event) {
    event.stopPropagation();
  });
}

function dropDisplay() {
    
  var dropdown = $('.droppable').find('.dropdown');
  var activeDrop = $(this).find('.dropdown');

  dropdown.removeClass('show');
  activeDrop.addClass('show');
}

function init() {

  domControl()
  $(document).click(dropErase);
  $('.droppable').mouseover(dropDisplay);
}

$(document).ready(init);