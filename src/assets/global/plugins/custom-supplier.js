/*global $, console, alert*/

$(document).ready(function () {
    "use strict";
    
    $(".menu-toggler").on("click", function () {
        $(".page-logo a span.build").toggleClass("marging");
        $(".rfq .rfq-footer").toggleClass("f-collapsed");
        $(".page-sidebar-menu.page-header-fixed").toggleClass("toggled");
        
        $(".custom-imgtitle-parent img").toggleClass("hideMe");
        
        $(".supp-bott").toggleClass("gone");
        
    });
    
    $(".page-sidebar .page-sidebar-menu>li:not(.page-sidebar .page-sidebar-menu>li.custom-nav-item)").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
//        $(this).siblings().find("ul.sub-menu").css("display", "none");
    });
    
    $(".page-sidebar-menu .nav-item .sub-menu li a").on("click", function () {
        $(".page-sidebar-menu .nav-item .sub-menu li").removeClass("active");
        $(this).parent().addClass("active");
        $(".page-sidebar-menu > .nav-item").removeClass("active");
        $(this).parent().parent().parent().addClass("active");
        
    });
    
    $(".page-toolbar span").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
    
    $(".supplier-1 .filters span.close-filter-element").on("click", function () {
        $(this).parent().fadeOut();
    });
    
    $(".close-filter-popup-click").on("click", function () {
        $(".item-wrapper-popup").fadeOut();
    });
    
    $(".clear-all-filters").on("click", function () {
        $(".supplier-1 .checkboxes .mt-checkbox>input:checked~span").css("background", "#FFF !important");
    });
    
    $(".supplier-1 .filters .pull-right").on("click", function () {
        $(".item-wrapper-popup").fadeIn();
    });
    
});