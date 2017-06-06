(function() {
  let a = 1;
  let b = 1;
  let w = window.innerWidth;
  let h = window.innerHeight;
  let P = $('#printout');
  let SH = $('.l-shadow');
  let uSH = $('.l-unshadow');
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
      SH.css('top',sYAngle+'%');
      sXAngle = 5 + 1.5*b;
      SH.css('left',sXAngle+'%');
      usYAngle = 5 - a;
      uSH.css('top',usYAngle+'%');
      usXAngle = 5 - 0.8*b;
      uSH.css('left',usXAngle+'%');
  });

})();
