/*global $, console, alert*/

$(document).ready(function () {
    "use strict";

    // Satrt Master
    $(".categories").on("click", function () {
        $(".sidebar").toggleClass("toggleSidebar");
        $(".wrapper").toggleClass("toggleWrapper");
        $(".toggleOverlay").fadeToggle(100);
        $(".bottom-header .navbar .navbar-brand .toggleCategories-close").fadeToggle(0);
        $(".bottom-header .navbar .navbar-brand .toggleCategories-chevron").fadeToggle(0);
//        $("body").toggleClass("heightToggle");
    });
    // End Master
    
    if ($(window).width() < 480) {
        $(".center").slick({
            slidesToShow: 2
        });
    }
    
    if ($(window).width() < 767) {
        $(".center").slick({
            slidesToShow: 4
        });
    }
    
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 6,
        slidesToScroll: 3
    });
    
    $(".back-top").on("click", function () {
        $("html, body").animate({scrollTop : 0}, "slow");
    });
    
    $(".tab1 .supplier-1 .pager .ul-page-nums li").not(".supplier-1 .pager .ul-page-nums li.next,.supplier-1 .pager .ul-page-nums li.previous").on("click", function () {
        $(".tab1 .supplier-1 .pager .ul-page-nums li").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".tab2 .supplier-1 .pager .ul-page-nums li").not(".supplier-1 .pager .ul-page-nums li.next,.supplier-1 .pager .ul-page-nums li.previous").on("click", function () {
        $(".tab2 .supplier-1 .pager .ul-page-nums li").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".tab3 .supplier-1 .pager .ul-page-nums li").not(".supplier-1 .pager .ul-page-nums li.next,.supplier-1 .pager .ul-page-nums li.previous").on("click", function () {
        $(".tab3 .supplier-1 .pager .ul-page-nums li").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".supplier-1 .pager .ul-page-nums li.next").on("click", function () {
        $(".supplier-1 .pager .ul-page-nums li.active").removeClass("active").next().addClass("active");
    });
    
    $(".supplier-1 .pager .ul-page-nums li.previous").on("click", function () {
        $(".supplier-1 .pager .ul-page-nums li.active").removeClass("active").prev().addClass("active");
    });
    
    $(".supplier-1 .content-side-nav ul li").on("click", function () {
        
        $(this).parent().next(".supplier-1 .content-side-nav .mt-checkbox-list").slideToggle(100).siblings(".supplier-1 .content-side-nav .mt-checkbox-list").fadeOut(0);
        
//        $(".supplier-1 .content-side-nav ul li").removeClass("toggle");
//        $(this).toggleClass("toggle");
        
    });
    
    $(".content-side-nav-toggler").on("click", function () {
        $(".content-side-nav").fadeToggle(0);
        $(".supplier-1").toggleClass("supplier-1-left");
        $(".content-side-nav-toggler").toggleClass("rotate-toggle");
    });
    
    $(".supplier-1 .content-side-nav .mt-checkbox-list ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    $(".toggleImage1").on("click", function () {
        $(".homepage-1 .close-deals .toggleImages img.first").removeClass("hidden").siblings().addClass("hidden");
        $(".toggleArrow1").removeClass("hidden");
        $(".toggleArrow2, .toggleArrow3, .toggleArrow4").addClass("hidden");
        $(this).addClass("active").siblings().removeClass("active");
        $(".toggleImage1").addClass("active");
    });
    
    $(".toggleImage2").on("click", function () {
        $(".homepage-1 .close-deals .toggleImages img.second").removeClass("hidden").siblings().addClass("hidden");
        $(".toggleArrow2").removeClass("hidden");
        $(".toggleArrow1, .toggleArrow3, .toggleArrow4").addClass("hidden");
        $(this).addClass("active").siblings().removeClass("active");
        $(".toggleImage2").addClass("active");
    });
    
    $(".toggleImage3").on("click", function () {
        $(".homepage-1 .close-deals .toggleImages img.third").removeClass("hidden").siblings().addClass("hidden");
        $(".toggleArrow3").removeClass("hidden");
        $(".toggleArrow1, .toggleArrow2, .toggleArrow4").addClass("hidden");
        $(this).addClass("active").siblings().removeClass("active");
        $(".toggleImage3").addClass("active");
    });
    
    $(".toggleImage4").on("click", function () {
        $(".homepage-1 .close-deals .toggleImages img.fourth").removeClass("hidden").siblings().addClass("hidden");
        $(".toggleArrow4").removeClass("hidden");
        $(".toggleArrow1, .toggleArrow2, .toggleArrow3").addClass("hidden");
        $(this).addClass("active").siblings().removeClass("active");
        $(".toggleImage4").addClass("active");
    });
    
    $("#menu").mmenu({
         "searchfield": {
            "showSubPanels": false
         },
         "navbars": [
            {
               "position": "top",
               "content": [
                  "searchfield"
               ]
            }
         ]
      });
    
    $("#menu-button").on("click", function () {
        $("#menu").data("mmenu").open();
    });
    
    $("nav#menu li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    $(".hamburger").on("click", function () {
        $(this).toggleClass("is-active");
    });
    
    $("#mm-blocker").on("click touchstart", function () {
        $(".toggleOverlay").fadeOut();
    });
    
    $(".product-info .center-1 .gallery .picture-thumbs .thumb-item1").on("click", function () {
        $(".product-info .center-1 .gallery .picture img.thumb-item1-img").fadeIn(0);
        $(".product-info .center-1 .gallery .picture img.thumb-item2-img").fadeOut(0);
    });
    
    $(".product-info .center-1 .gallery .picture-thumbs .thumb-item2").on("click", function () {
        $(".product-info .center-1 .gallery .picture img.thumb-item2-img").fadeIn(0);
        $(".product-info .center-1 .gallery .picture img.thumb-item1-img").fadeOut(0);
    });
    
    $(".supplier-tabs-inner .tabs ul.tab-wrapper li").on("click", function () {
        $(".supplier-tabs-inner .tabs ul.tab-wrapper li").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".supplier-tabs-inner ul.tab-wrapper li.tab1").on("click", function () {
        $(".supplier-tabs-inner .tabs-wrapper .tabs .tab").addClass("hidden");
        $(".supplier-tabs-inner .tabs-wrapper .tabs .tab1").removeClass("hidden");
    });
    
    $(".supplier-tabs-inner ul.tab-wrapper li.tab2").on("click", function () {
        $(".supplier-tabs-inner .tabs-wrapper .tabs .tab").addClass("hidden");
        $(".supplier-tabs-inner .tabs-wrapper .tabs .tab2").removeClass("hidden");
    });
    
    $(".supplier-tabs-inner ul.tab-wrapper li.tab3").on("click", function () {
        $(".supplier-tabs-inner .tabs-wrapper .tabs .tab").addClass("hidden");
        $(".supplier-tabs-inner .tabs-wrapper .tabs .tab3").removeClass("hidden");
    });
    
});