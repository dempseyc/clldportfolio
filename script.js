$(document).ready(function(){

  let Projs = $('#projects');

  projects.forEach(function(item){
    let DIV = $('<div class="proj-elem">')
    let title = item["title"];
    let IMGhref = item["thumbnail"];
    let IMG = $('<img src="./public/images/'+IMGhref+'">')
    let LNK = item["link"];
    let aREF = $('<a href="'+LNK+'">'+title+'</a>');
    aREF.append(IMG);
    DIV.append(aREF);
    Projs.append(DIV);
  })

  console.log(projects);

});



