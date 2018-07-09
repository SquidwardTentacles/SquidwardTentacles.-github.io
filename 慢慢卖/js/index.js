$(function(){
    

// document.querySelector("html").style.fontSize=window.screen.width/ 10 + "px";


    // 点击箭头显示隐藏二级菜单
    $('.list ul').on('click','.list-li',function(){
        // 点击前先移除箭头的active类
        $(this).parent('.box-list').siblings().children('.list-li').children('.list-li-a').removeClass('active') ;
        // 点击前先让其他二级菜单影藏
        $(this).parent('.box-list').siblings('.box-list').children('.product').slideUp() ;
        // 为箭头添加active类
        $(this).children('.list-li-a').stop().toggleClass('active') ;
        // 显示二级菜单
        $(this).siblings('.product').stop().slideToggle() ;

        // 点击2显示二级分类菜单获取数据 
        // 拿到自定义属性的id值
        var cateid=$(this).children('a').data('cateid') ;
        cateid = JSON.parse(cateid) ;
        console.log(cateid);
        //  二级分类菜单获取数据
        $.ajax({
            url:'http://mmb.ittun.com/api/getcategory',
            type:'GET', 
            data:{titleid:cateid},
            success:function(responce){
                // console.log(responce);
                var subcatemenu = template('subcate',responce);
                $('.product ul').html(subcatemenu) ;
            }
        })
    })

    // 一级分类菜单获取数据
     $.ajax({
         url:'http://mmb.ittun.com/api/getcategorytitle',
         type:'GET',
         success:function(responce){
            // console.log(responce);
            var firstcate = template('firstcategroy',responce) ;
            $('.list ul').html(firstcate) ;
         }
     })
    
    
})  