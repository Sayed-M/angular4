/*global $, console, alert*/

$(document).ready(function () {
    "use strict";
    
    $(".categories").on("click", function () {
        $(".sidebar").toggleClass("toggleSidebar");
        $(".wrapper").toggleClass("toggleWrapper");
        $(".toggleOverlay").fadeToggle(100);
        $(".bottom-header .navbar .navbar-brand .toggleCategories-close").fadeToggle(0);
        $(".bottom-header .navbar .navbar-brand .toggleCategories-chevron").fadeToggle(0);
        $("body").toggleClass("heightToggle");
    });
    
});