/**
 * index.js
 * - All our useful JS goes here, awesome!
 Maruf-Al Bashir Reza
 */

console.log("JavaScript is amazing!");
$(document).ready(function($) {


  $(document).ready(function() {
    $('#particles').particleground({
      minSpeedX: 0.1,
      maxSpeedX: 0.7,
      minSpeedY: 0.1,
      maxSpeedY: 0.7,
      directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
      directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
      density: 10000, // How many particles will be generated: one particle every n pixels
      dotColor: '#666666',
      lineColor: '#666666',
      particleRadius: 7, // Dot size
      lineWidth: 1,
      curvedLines: false,
      proximity: 100, // How close two dots need to be before they join
      parallax: true,
      parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
      onInit: function() {},
      onDestroy: function() {}
    });
    });



  ///////////////////////// scroll coding start from hear --->>/////////////////////////
  
  function animateElements() {
    $('.progressbar').each(function() {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data('animate', true);
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 14,
          fill: {
            color: '#1B58B8'
          }
        }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);

// overly js cide.....

  
  
    
});