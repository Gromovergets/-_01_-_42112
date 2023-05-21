 let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "fotka", то есть к картинкам: */
    let slides = document.getElementsByClassName("fotka");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}

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
     
    