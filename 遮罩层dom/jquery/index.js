


$(function () {
    $('.header li').mouseenter(function (){
        // alert('鼠标')
        $color =  $(this).children('a').css('color') ;
       // alert($color) ;
        $(this).children('a').css('color','orange') ;
        
    })

    $('.header li').mouseleave(function (){
        $(this).children('a').css('color',$color) ;
    })

    
    $('#listoneli').mouseenter(function(){
        $('.listOne').show() ;
    })
    $('#listoneli').mouseleave(function(){
        $('.listOne').hide() ;
    })
    $('#listtwoli').mouseenter(function(){
        $('.list2').show() ;
    })
    $('#listtwoli').mouseleave(function(){
        $('.list2').hide() ;
    })
    // $hiddenW = $(".header").children('ul').children('li').attr('width') ;
    // console.log(hiddenW);
    // $('.hidden').css()            

    $('.communify .left').mouseenter(function(){
        $(this).children('.cover').animate({left:190,bottom:210},500)
    })
    $('.communify .left').mouseleave(function(){
        $(this).children('.cover').animate({left:-400,bottom:-270},500)
    })

    $('.communify .right').mouseenter(function(){
        $(this).children('.covertwo').animate({left:190,bottom:210},500)
    })
    $('.communify .right').mouseleave(function(){
        $(this).children('.covertwo').animate({left:-400,bottom:-270},500)
    })
})