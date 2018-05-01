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
// Toggle Mac View More Button for EastC Fashion
$(function() {
    $( "#eastfashionButton" ).click(function() {
        $( "#eastcFashionInfo" ).toggle();
    });
});

// Toggle Mac View More Button for myReads
$(function() {
    $( "#myReadsButton" ).click(function() {
        $( "#myReadsInfo" ).toggle();
    });
});

// Toggle Mac View More Button for Topshelf Imagination
$(function() {
    $( "#topshelfButton" ).click(function() {
        $( "#topshelfInfo" ).toggle();
    });
});

// Toggle Mac View More Button for What's Cooking
$(function() {
    $( "#cookingButton" ).click(function() {
        $( "#cookingInfo" ).toggle();
    });
});

$(function() {
    $( "#kogiButton" ).click(function() {
        $( "#kogiInfo" ).toggle();
    });
});

$(function() {
    $( "#lolMathButton" ).click(function() {
        $( "#lolInfo" ).toggle();
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

//Close My Reads Information
$(function(){
  $(".close_myReads_button").click(function(){
    $("#myReadsInfo").toggle();
  });
});

//Close Topshelf  Information
$(function(){
  $(".close_topshelf_button").click(function(){
    $("#topshelfInfo").toggle();
  });
});

//Close Cooking Information
$(function(){
  $(".close_cooking_button").click(function(){
    $("#cookingInfo").toggle();
  });
});

// Close Kogi Information
$(function(){
  $(".close_kogi_button").click(function(){
    $("#kogiInfo").toggle();
  });
});

//Close Lol Math information
$(function(){
  $(".close_lol_math_button").click(function(){
    $("#lolInfo").toggle();
  });
});
