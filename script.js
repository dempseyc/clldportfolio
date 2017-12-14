$(document).ready(function(){

  let Projs = $('#projects');

  projects.forEach(function(item){
    let DIV = $('<div class="proj-elem">');
    let heading = item["heading"];
    let title = item["title"];
    let IMGhref = item["thumbnail"];
    let LINK = item["link"];
    let GHLINK = item["githublink"];
    let IMG = $('<a href="'+LINK+'"><img src="./public/images/'+IMGhref+'"></a>');
    let aREF = $('<a href="'+LINK+'">'+title+'</a>');
    let headTXT = $('<h3>'+heading+'</h3>');
    let head4TXT = $('<h4>'+GHLINK+'</h4>');
    DIV.append(aREF);
    DIV.append(headTXT);
    DIV.append(IMG);
    DIV.append(head4TXT);
    Projs.append(DIV);
  })

  console.log(projects);

});



