(function() {
  let a = 1;
  let b = 1;
  let w = window.innerWidth;
  let h = window.innerHeight;
  let P = $('#printout');
  let nSH = $('.n-shadow');
  let nuSH = $('.n-unshadow');
  let rSH = $('.n-shadow');
  let ruSH = $('.n-unshadow');
  let sXAngle = 7;
  let sYAngle = 7;
  let usXAngle = 5;
  let usYAngle = 5;
  let body = $('body');
  let T = $('.transparent');


  body.on('mousemove', function(e) {
      a = e.clientY/h;
      b = e.clientX/w;
      sYAngle = 4 + 3*a;
      sXAngle = 5 + 1.5*b;
      usYAngle = 5 - a;
      usXAngle = 5 - 0.8*b;
      nSH.css('top',sYAngle+'%');
      nSH.css('left',sXAngle+'%');
      nuSH.css('top',usYAngle+'%');
      nuSH.css('left',usXAngle+'%');
      rSH.css('top',sYAngle+'%');
      rSH.css('left',sXAngle+'%');
      ruSH.css('top',usYAngle+'%');
      ruSH.css('left',usXAngle+'%');
  });

})();
