$(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: ".page-section",
    scrollOverflow: true,
    anchors: ["top", "about", "skills", "cases", "contacts"],
    menu: "#header__nav",
  });

  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".menu__list-link").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu__list").removeClass("menu__list--active");
  });


 

});


function writtingText() {
    const text = ["Hello, world!"];
    function typeText() {
      let line = 0;
      let count = 0;
      let out = "";
      let htmlOut = document.querySelector("#aboutMe");
      function typeLine() {
        let interval = setTimeout(function () {
          out += text[line][count];
          htmlOut.innerHTML = out;
          count++;

          if (count >= text[line].length) {
            count = 0;
            line++;
            if (line == text.length) {
              clearTimeout(interval);
              return true;
            }
          }
          typeLine();
        }, 100);
      }
      typeLine();
      
    }
    typeText();
    
    
}
flag = false;
const about = document.querySelector(".about")
const aboutd = document.querySelector(".top")

    about.addEventListener('mouseenter', function(){
        if(flag == false){
            writtingText();
            flag = true
        }
        
    })

    aboutd.addEventListener('touchstart', function(){
        if(flag == false){
            writtingText();
            flag = true
        }
      
    })

