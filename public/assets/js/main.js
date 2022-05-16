/*
Template Name: ClassiGrids - Classified Ads and Listing Website Template.
Author: GrayGrids
*/
tns({
    container: ".category-slider",
    items: 3,
    slideBy: "page",
    autoplay: false,
    mouseDrag: true,
    gutter: 0,
    nav: false,
    controls: true,
    controlsText: [
        '<i class="lni lni-chevron-left"></i>',
        '<i class="lni lni-chevron-right"></i>',
    ],
    responsive: {
        0: {
            items: 1,
        },
        540: {
            items: 2,
        },
        768: {
            items: 4,
        },
        992: {
            items: 5,
        },
        1170: {
            items: 6,
        },
    },
});

(function () {
    "use strict";

    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 200);
    };

    function fadeout() {
        document.querySelector(".preloader").style.opacity = "0";
        document.querySelector(".preloader").style.display = "none";
    }

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener("click", function () {
        navbarToggler.classList.toggle("active");
    });

    // WOW active
    new WOW().init();
})();
