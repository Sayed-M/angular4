/*global $, console, alert*/

$(document).ready(function () {
    "use strict";
    
    $(".menu-toggler").on("click", function () {
        $(".page-logo a span:first-of-type").toggleClass("marging");
        $(".rfq .rfq-footer").toggleClass("f-collapsed");
        $(".supp-bott").toggleClass("gone");
        $(".page-sidebar-menu.page-header-fixed").toggleClass("toggled");
        
        $(".custom-imgtitle-parent img").toggleClass("hideMe");
        
    });
    
    $(".page-sidebar-menu .nav-item .sub-menu li a").on("click", function () {
        $(".page-sidebar-menu .nav-item .sub-menu li").removeClass("active");
        $(this).parent().addClass("active");
        $(".page-sidebar-menu > .nav-item").removeClass("active");
        $(this).parent().parent().parent().addClass("active");
        
    });
    
    var var_width =  ($(".page-content-wrapper .page-content .input-group .form-control.c-number").width() - 35) + "px";
    
    $(".page-content-wrapper .page-content .input-group .form-control.c-number").css("width", var_width);
    
//    function check() {
//    
//        $("..scr-six-wrapper .pagination .pages span:first").hasClass("active") ? pervious.fadeOut() : pervious.css("display", "inline-block");
//
//        $(".scr-six-wrapper .pagination .pages span:last").hasClass("active") ? next.fadeOut() : next.css("display", "inline-block");
//
//    }
//
//    check();
    
    $(".scr-six-wrapper .pagination span").not(".scr-six-wrapper .pagination .next span, .scr-six-wrapper .pagination .previous span").on("click", function () {
        $(".scr-six-wrapper .pagination span").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".scr-six-wrapper .pagination .next span").on("click", function () {
        $(".scr-six-wrapper .pagination span.active").removeClass("active").next().addClass("active");
    });
    
    $(".scr-six-wrapper .pagination .previous span").on("click", function () {
        $(".scr-six-wrapper .pagination span.active").removeClass("active").prev().addClass("active");
    });
    
    $(".scr-7-wrapper .m-m-c-tabs ul li").on("click", function () {
        $(".scr-7-wrapper .m-m-c-tabs ul li").siblings().removeClass("active");
        $(this).addClass("active");
    });
    
    $(".password-input1").each(function (index, input) {
        var $input = $(input);
        $(".scr-profile-2 .show1").click(function () {
            var change = "";
            if ($(this).html() === "Show") {
                $(this).html("Hide");
                change = "text";
            } else {
                $(this).html("Show");
                change = "password";
            }
            var rep = $("<input type='" + change + "' />")
        .attr("id", $input.attr("id"))
        .attr("name", $input.attr("name"))
        .attr('class', $input.attr('class'))
        .val($input.val())
        .insertBefore($input);
      $input.remove();
      $input = rep;
    });
  });
    
    $(".password-input2").each(function (index, input) {
        var $input = $(input);
        $(".scr-profile-2 .show2").click(function () {
            var change = "";
            if ($(this).html() === "Show") {
                $(this).html("Hide");
                change = "text";
            } else {
                $(this).html("Show");
                change = "password";
            }
            var rep = $("<input type='" + change + "' />")
        .attr("id", $input.attr("id"))
        .attr("name", $input.attr("name"))
        .attr('class', $input.attr('class'))
        .val($input.val())
        .insertBefore($input);
      $input.remove();
      $input = rep;
    });
  });
    
    $(".password-input3").each(function (index, input) {
        var $input = $(input);
        $(".scr-profile-2 .show3").click(function () {
            var change = "";
            if ($(this).html() === "Show") {
                $(this).html("Hide");
                change = "text";
            } else {
                $(this).html("Show");
                change = "password";
            }
            var rep = $("<input type='" + change + "' />")
        .attr("id", $input.attr("id"))
        .attr("name", $input.attr("name"))
        .attr('class', $input.attr('class'))
        .val($input.val())
        .insertBefore($input);
      $input.remove();
      $input = rep;
    });
  });
    
});