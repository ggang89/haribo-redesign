$(document).ready(function(){
    let ww= $(window).width();
    let wh= $(window).height();
    box_layout();
    $(window).resize(function(){
        box_layout();
    })

    function box_layout() {
        ww= $(window).width();
        wh= $(window).height();

        $(".header").css({
            width: ww,
            height: ww*0.052
        })
        $(".page_1,.page_2,.page_3,.page_4").css({
            width: ww,
            height: wh
        })
        // $(".page_5").css({
        //     width: ww,
        //     height: ww*0.2627
        // })
        // $(".ani_wrap").css({
        //     width: ww,
        //     height: ww*0.1576
        // })
    }
// 1페이지 이동 버튼



    // $(".product_button").click(function(){
    //     let pi=$(this).index();
    //     $(".move_box").animate({
    //         left:-(pi*1900)
    //     })
    //     $(".page_1").css({

    //     })
    // })
    

// 1페이지 배경화면 색 전환
let bg=['goldenrod','yellowgreen','red','darkblue'];
$(".page_1").css({
    background:function(index){
        return bg[index]
    }
})
$(".product_button").click(function(){
let but_i=$(this).index();

$(".page_1").css({
    background:function(index){
        return bg[but_i]
    }
})

})

//팝업창
$(".product_button_1").click(function(){
    $(".pop_up_2,.pop_up_3,.pop_up_4").fadeOut();
    $(".pop_up_1").fadeIn(500);
})
$(".product_button_2").click(function(){
    $(".pop_up_1,.pop_up_3,.pop_up_4").fadeOut();
    $(".pop_up_2").fadeIn(500);
    
})
$(".product_button_3").click(function(){
    $(".pop_up_1,.pop_up_2,.pop_up_4").fadeOut();
    $(".pop_up_3").fadeIn(500); 
})
$(".product_button_4").click(function(){
    $(".pop_up_1,.pop_up_2,.pop_up_3").fadeOut();
    $(".pop_up_4").fadeIn(500);

})
// 메뉴 누르면 페이지 이동하는 거


$(".top_menu").each(function(index){
    $(this).attr('data-index',index);
}).click(function(){
    let di=$(this).attr('data-index');
    let page_h=$('.page').height();
    $("html,body").animate({
        scrollTop:page_h*di
    })
    $(".top_menu").removeClass("on");
    $(".top_menu").eq(di).addClass("on");


})

// 2페이지 효과
$(window).scroll(function(){
    st=$(this).scrollTop();
    if(700 < st){
        $('.wrap').animate({
            top: 0
        }, 2000)
    }
})


// 슬라이드

let auto=setInterval(function(){
    $(".ani_move_box").animate({
        left:-290
   },1500,function(){
        $(".ani_img_box").first().appendTo(".ani_move_box");
        $(".ani_move_box").css({
        left:0
    })
   })
},1000)













})