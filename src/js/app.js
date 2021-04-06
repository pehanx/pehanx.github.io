import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 0,
        drag:false,
        rewind: true,
        arrows: false,
        breakpoints: {
            768: {
                drag:true,
                perPage: 2,
            },
            480: {
                drag:true,
                perPage: 1
            }
        }
    }).mount();

    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function (e) {
            e.preventDefault();
            let parent = this.parentElement.parentElement;
            let content = this.parentElement.nextElementSibling;

            if (!parent.classList.contains('faq__question--open')) {
                content.classList.add('faq__question-content--padding');
                parent.classList.add('faq__question--open');
            } else {
                parent.classList.remove('faq__question--open');
                setTimeout(function () {
                    content.classList.remove('faq__question-content--padding');
                }, 200);
            }
        });
    }

    const menu_burger = document.querySelector(".header__burger");
    const menu_header = document.querySelector(".header__menu");

    menu_burger.addEventListener("click", function () {
        this.classList.toggle('header__burger--open');
        menu_header.classList.toggle('header__menu--open');
    });

    const menu_links = document.querySelectorAll(".header__menu a");

    for (let i = 0; i < menu_links.length; i++) {
        menu_links[i].addEventListener("click", function () {
            menu_burger.classList.remove('header__burger--open');
            menu_header.classList.remove('header__menu--open');
        });
    }
    //
    // $( '.menu a' ).on("click", function(){
    //     $('.menu').removeClass('open');
    // });
});