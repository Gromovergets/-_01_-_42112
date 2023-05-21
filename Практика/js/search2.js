 

 document.querySelector(".circle").addEventListener("click", () => {
        for (let i = 0; i <= 3; i++) {
          document
            .getElementsByClassName("nav-items")
            [i].classList.remove("show-menu");
          document
            .getElementsByClassName("box-line")
            [i].classList.remove("box-line-show");
        }
        document.querySelector(".box").classList.remove("box-show");
        document.querySelector(".add").classList.toggle("go");
        document.querySelector(".search").classList.toggle("search-focus");
        document.querySelector(".search").focus();
        document.querySelector(".circle").classList.toggle("color");
        document.querySelector(".line1").classList.toggle("move");
        document.querySelector(".line2").classList.toggle("mov");
        document.querySelector(".effect").classList.toggle("big");
      });
      /* menu */
     
    