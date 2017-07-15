$(document).ready(function(){

  let Projs = $('#projects');

  projects.forEach(function(item){
    let DIV = $('<div class="proj-elem">');
    let heading = item["heading"];
    let title = item["title"];
    let IMGhref = item["thumbnail"];
    let LNK = item["link"];
    let IMG = $('<a href="'+LNK+'"><img src="./public/images/'+IMGhref+'"></a>');
    let aREF = $('<a href="'+LNK+'">'+title+'</a>');
    let headTXT = $('<h3>'+heading+'</h3>');
    DIV.append(aREF);
    DIV.append(headTXT);
    DIV.append(IMG);
    Projs.append(DIV);
  })

  console.log(projects);

});



