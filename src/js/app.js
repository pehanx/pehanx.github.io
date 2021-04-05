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
    menu_burger.addEventListener("click", function () {
        this.classList.toggle('header__burger--open')
    })
});