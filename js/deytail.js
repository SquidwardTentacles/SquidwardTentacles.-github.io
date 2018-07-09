


// 截取字符串的方法
function parseURL(url) {
    var result = [];
    var query = url.split("?")[1];
    var queryArr = query.split("&");
    var params = {};
    queryArr.forEach(function (item) {
        var key = item.split("=")[0];
        var value = item.split("=")[1];
        params[key] = value;
    });
    return params;
}
$(function(){
    
    var productid =parseURL(window.location.href).id ;
    console.log(productid); 

    // 获取商品详情
    $.ajax({
        url:'http://mmb.ittun.com/api/getproduct',
        type:'GET',
        data:{
            productid:productid
        },
        success:function(response){
            console.log(response);
            var productmessage = template('productmessage',response);
            $('.detail .detal-img').html(productmessage) ;
            // console.log(productmessage);
        }
    })

    $.ajax({
        url:'http://mmb.ittun.com/api/getproductcom',
        data:{
            productid:productid
        },
        type:'GET',
        success:function(response){
            console.log(response);
            var usermessage = template('usermessage',response);
            $('.textpingjia').html(usermessage) ;
        }
    })
})