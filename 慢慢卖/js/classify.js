
 
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
    var classurl=parseURL(window.location.href).id;
    var pageid = 1 ;
    var datanum ;
    var pagesize ;
    var pagenum;
    // 进入页面默认调用一次
    
 
        responcenum(pageid) ;
    

    // 获取列表页数据
    function responcenum(pageid){
        $.ajax({
            url:'http://mmb.ittun.com/api/getproductlist' ,
            type:'GET' ,
            data:{categoryid :classurl,
                pageid :pageid},
            success:function(response){
                console.log(response);
                // console.log(response.pagesize);
                // console.log(response.totalCount);
                var listproduct=template('list',response) ;
                $('.main-in ul').html(listproduct) ;
                // window.response=response;

                datanum = response.totalCount ;
                pagesize = response.pagesize ;
                pagenum =Math.ceil(datanum/pagesize)  ;
                // console.log(datanum);
                // console.log(pagesize);
                // console.log(pagenum);
                $("#pageId").html(pageid);
                $('#pageNeum').html(pagenum) ;
                window.scrollTo(0,0); //返回顶部

                // return pagenum ;
            }
        })
    }
    
    // 渲染列表的ajax代码
    $('.nextpage').click(function(e){
        // console.log(pagenum) ;
        // alert('aaa')
        e=e|| window.event;
        e.preventDefault();
        if(pageid<pagenum) {
            pageid++ ;
            console.log(pageid);
            responcenum(pageid);
        }
    })

    $('.previouspage').click(function(e){
        // console.log(pagenum) ;
        // alert('aaa')
        e=e|| window.event;
        e.preventDefault();
        if(pageid>0) {
            pageid--;
            console.log(pageid);
            responcenum(pageid);
        }
    })
    // 回到首页的点击事件
    $('.gototop').click(function(e){
        e=e || window.event ;
        e.preventDefault() ;
        window.scrollTo(0,0) ;
    })

})

