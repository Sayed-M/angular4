/*global $, console, alert*/

$(document).ready(function () {
    "use strict";

    var userError  = true,
        emailError = true,
        passwordError = true;

    $(".last-step .username").blur(function () {
        if ($(this).val().length < 4) {
            $(this).parent().parent().find(".user-error").fadeIn(300);
            $(this).parent().parent().find(".after-user-error").fadeOut(300);
            $(this).parent().parent().find(".valid-user-check").fadeOut(300);
            userError  = true;
        } else {
            $(this).parent().parent().find(".user-error").fadeOut(300);
            $(this).parent().parent().find(".after-user-error").fadeIn(300);
            $(this).parent().parent().find(".valid-user-check").fadeIn(300);
            userError  = false;
        }
    });

    $(".last-step .email").blur(function () {
        if ($(this).val() === "") {
            $(this).parent().parent().find(".email-error").fadeIn(300);
            $(this).parent().parent().find(".after-email-error").fadeOut(300);
            $(this).parent().parent().find(".valid-email-check").fadeOut(300);
            emailError = true;
        } else {
            $(this).parent().parent().find(".email-error").fadeOut(300);
            $(this).parent().parent().find(".after-email-error").fadeIn(300);
            $(this).parent().parent().find(".valid-email-check").fadeIn(300);
            emailError = false;
        }
    });
    
    $(".last-step .password-input").keyup(function () {
        if ($(this).val().length < 1) {
            $(this).parent().parent().find(".password-error").fadeIn(300);
            $(this).parent().parent().find(".after-password-error").fadeOut(300);
            passwordError  = true;
        } else {
            $(this).parent().parent().find(".password-error").fadeOut(300);
            $(this).parent().parent().find(".after-password-error").fadeIn(300);
            passwordError  = false;
        }
    });

    $(".last-step .contact-form").submit(function (e) {
        if (userError === true || emailError === true || passwordError === true) {
            e.preventDefault();
            $(".username, .email, .phone, .password-input").blur();
        }
    });
    
    // ================= SHOW PASSWORD ================
    
    $(".password-input").each(function (index, input) {
        var $input = $(input);
        $(".form-table .show").click(function () {
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
    
    // ================= SHOW PASSWORD ================
    
    // ================= PASSWORD STRENGTH ================
    
    var result = $(".last-step .pass-meter-color");
  
    $('.password-input').keyup(function(){
        $(".after-password-error .changable").html(checkStrength($('.password-input').val()))
    });
 
    function checkStrength(password){
 
    //initial strength
    var strength = 0
    
    if (password.length == 0) {
        result.removeClass()
        return ''
    }
    //if the password length is less than 7, return message.
    if (password.length < 9) {
        result.addClass('weak')
        result.css({'width': '25px', 'background': '#f00'})
        return '<span style="color:#f00;font-weight:600;font-size:12px;">Weak</span>'
    }
 
    //length is ok, lets continue.
 
    //if length is 8 characters or more, increase strength value
    if (password.length > 9) strength += 1
 
    //if password contains both lower and uppercase characters, increase strength value
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
 
    //if it has one special character, increase strength value
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
 
    //if it has two special characters, increase strength value
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) strength += 1
 
    //now we have calculated strength value, we can return messages
 
    //if value is less than 2
    if (strength < 2) {
        result.css({'width': '50px', 'background': '#afe9ff'})
        result.addClass('normal')
        return '<span style="color:#afe9ff;font-weight:600;font-size:12px;">Normal</span>'
    } else if (strength == 2 ) {
        result.css({'width': '75px', 'background': '#4642d8'})
        result.addClass('medium')
        return '<span style="color:#4642d8;font-weight:600;font-size:12px;">Medium</span>'
    } else {
        result.css({'width': '100px', 'background': '#00b656'})
        result.addClass('vstrong')
        return '<span style="color:#00b656;font-weight:600;font-size:12px;">Strong</span>'
    }
  }
                
    // ================= PASSWORD STRENGTH ================
    
    // ================= Tabs ================

    $(".main-content .left-content .form-table .tabs span").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
  
});