/*global $, console, alert*/

$(document).ready(function () {
    "use strict";
    
    $(".droping-control").on("click", function () {
        $(".droping").slideToggle(200);
    });
    
    $(".droping li").on("click", function () {
        $(".droping").fadeOut();
    });
    
    $(".page-toolbar span").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
    
    $(".menu-toggler").on("click", function () {
        $(".page-logo a span:first-of-type").toggleClass("marging");
        $(".rfq .rfq-footer").toggleClass("f-collapsed");
        $(".supp-bott").toggleClass("gone");
    });
    
    $(".order .top-ta div div").on("click", function () {
        $(".order .top-ta .ta").removeClass("this-act");
        $(this).addClass("this-act");
    });
    
    $(".order2 .ss-and-ii > span").on("click", function () {
        $(".s-and-i").removeClass("s-and-i-active");
        $(this).addClass("s-and-i-active");
    });
    
    $(".order2 .media-wrapp > div").on("click", function () {
        $(".order2 .media-wrapp .media").removeClass("media-active");
        $(this).addClass("media-active");
    });
    
    $(".order6 .bac .all").on("click", function () {
        $(".order6 .drro").toggleClass("ha");
    });
    
    $(".order6 .abovv li").on("click", function () {
        $(this).siblings().removeClass("acctt");
        $(this).addClass("acctt");
    });
  
});