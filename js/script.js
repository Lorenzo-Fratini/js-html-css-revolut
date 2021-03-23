function dropErase() {
  $(document).click(function(){
    $('li').find('.dropdown').removeClass('show');
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

  dropErase()
  dropDisplay();
}

$(document).ready(init);