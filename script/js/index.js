jQuery(function($) {
  if ($(window).width() > 769) {
    $('.navbar .dropdown').hover(function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

    }, function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

    });

    $('.navbar .dropdown > a').click(function() {
      location.href = this.href;
    });

  }
});


$(function() {
    $( "#trainingButton" ).click(function() {
        $( "#trainingForGainsWebInfo" ).toggle();
    });
});

$(function() {
    $( "#eastfashionButton" ).click(function() {
        $( "#eastcFashionInfo" ).toggle();
    });
});

$(function(){
  $(".close_training_button").click(function(){
    $("#trainingForGainsWebInfo").toggle();
  });
});
