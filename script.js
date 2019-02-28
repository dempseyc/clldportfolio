$(document).ready(function(){

  $.scrollify({
    section : ".content-item",
    sectionName : "section-name",
    // interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    // scrollbars: true,
    // standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true
    // before:function(indexPosition,snapToElm){
    //     if(indexPosition===0){
    //         snapToElm[0].css({"padding-top":"75rem"});
    //     }
    //     if(indexPosition>0){
    //         snapToElm[0].css({"padding-top":"75rem"});
    //     }
    // },


    // afterRender:function(){

    //  //set the first element initially to the desired offset
    //   $($(this.section)[0]).css({"margin-top":"75rem"});
    //  //  stuff to do once scrollify has rendered the list
    // },
    // after:function() {},
    // afterResize:function() {},
    // afterRender:function() {}
  });

  let Projs = $('*[data-section-name="projects"]');

  // Projs will be the .content-item where these elems live
  // 

  projects.forEach(item => {
    let DIV = $('<div class="proj-elem">');
    let heading = item["heading"];
    let title = item["title"];
    let IMGhref = item["thumbnail"];
    let LINK = item["link"];
    let GHLINK = item["githublink"];
    let STACK = item["stack"];
    let IMG = $(`<a href="${LINK}"  target="_blank" ><img src="./public/images/${IMGhref}"></a>`);
    let aREF = $(`<a href="${LINK}" target="_blank" >${title}</a>`);
    let headTXT = $(`<h3>${heading}</h3>`);
    let head4TXT = $(`<span>${STACK}</span><a href="${GHLINK}" target="_blank" ><h4>${GHLINK}</h4></a>`);
    DIV.append(aREF);
    DIV.append(headTXT);
    DIV.append(IMG);
    DIV.append(head4TXT);
    Projs.append(DIV);
  })

  console.log(projects);

});



