$(document).ready(function () {

    //漢堡和叉叉開始
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
    //漢堡和叉叉結束

    //左邊內容點選效果
    $('.food-menu li a').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('act').parent().siblings().find('a').removeClass('act');
        // $(this).addClass('act').parent().siblings().find('a').removeClass('act')
    });

    //愛心滿格
    $('.fa-sharp ').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('max');
    });














});



