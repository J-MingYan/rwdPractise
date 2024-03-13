$(document).ready(function () {

    $(".opne").click(function (e) { 
        e.preventDefault();
        $(this).hide();
        $(".xmark").show();
        $(".wrap").addClass("show");
    });

    $(".xmark").click(function (e) { 
        e.preventDefault();
        $(this).hide();
        $(".opne").show();
        $(".wrap").removeClass("show");
    });



        















});



