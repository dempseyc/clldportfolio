$(document).ready(function(){
  let a = 1;
  let b = 1;
  let w = window.innerWidth;
  let h = window.innerHeight;
  // let P = $('#printout');
  let nSH = $('.n-shadow');
  let nuSH = $('.n-unshadow');
  let rSH = $('.r-shadow');
  let ruSH = $('.r-unshadow');
  let eSH = $('.e-shadow');
  let euSH = $('.e-unshadow');
  let sXAngle = 7;
  let sYAngle = 5;
  let usXAngle = 7;
  let usYAngle = 5;
  let body = $('body');
  let T = $('.transparent');

  body.on('mousemove', function(e) {
      a = e.clientY/h;
      b = e.clientX/w;
      sXAngle = 4 + 1.7*b;
      sYAngle = 5 + 1.5*a;
      usXAngle = 5 - 0.4*b;
      usYAngle = 5 - 0.4*a;
      nSH.css('left',sXAngle+'%');
      nSH.css('top',sYAngle+'%');
      nuSH.css('left',usXAngle+'%');
      nuSH.css('top',usYAngle+'%');
      rSH.css('left',sXAngle+'%');
      rSH.css('top',sYAngle+'%');
      ruSH.css('left',usXAngle+'%');
      ruSH.css('top',usYAngle+'%');
      eSH.css('left',sXAngle+'%');
      eSH.css('top',sYAngle+'%');
      euSH.css('left',usXAngle+'%');
      euSH.css('top',usYAngle+'%');
  });

  let Projs = $('#projects');

  projects.forEach(function(item){
    let DIV = $('<div class="proj-elem">')
    let title = item["title"];
    let IMGhref = item["thumbnail"];
    let IMG = $('<img src="./public/images/'+IMGhref+'">')
    let GITlink = item["github-repo"];
    let LNK = item["link"];
    let aREF = $('<a href="'+LNK+'">'+title+'</a>');
    DIV.append(aREF);
    DIV.append(IMG);
    Projs.append(DIV);
  })

  console.log(projects);

});



