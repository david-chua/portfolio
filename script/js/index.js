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

// Toggle Mac View More Button to show information
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

// Close Information Button
//Close Training for Gains Info
$(function(){
  $(".close_training_button").click(function(){
    $("#trainingForGainsWebInfo").toggle();
  });
});
// Close EastC Fashion Info
$(function(){
  $(".close_fashion_button").click(function(){
    $("#eastcFashionInfo").toggle();
  });
});
