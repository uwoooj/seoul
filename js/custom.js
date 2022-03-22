$(function(){
    
    $('#inp_citylang').click(function(){
        
        url = $('#citylang').val()
        window.open(url, "_blank");  


    })

    $('.slide_con h3').click(function(){
        $('.slide_con').removeClass('on') //초기화
        $(this).parents('.slide_con').addClass('on') //내가 선택한것
    })

    // slide_01\
    var swiper = new Swiper(".slide_01", {
        navigation: {
            nextEl: ".slide_01 .next",
            prevEl: ".slide_01 .prev",
          },

          pagination: {
            el: ".slide_01 .fraction",
            type: "fraction",
          },




    });

    var swiper = new Swiper(".slide_02", {
        // option
        loop:true,
        navigation: {
            nextEl: ".slide_02 .next",
            prevEl: ".slide_02 .prev",
          },

          pagination: {
            el: ".slide_02 .fraction",
            type: "fraction",
          },



          
    });


    // .banner_slide //

    var swiper = new Swiper(".banner_slide", {
        slidesPerView: 3,   //갯수
        spaceBetween: 43,   //간격
        

        navigation: {
            nextEl: ".banner_slide .next",
            prevEl: ".banner_slide .prev",
          },

          pagination: {
            el: ".banner_slide .fraction",
            type: "fraction",
          },
          loop:true,
          
      });


      $('.related-site button').click(function(){


        // $('.related-site button').removeClass('on')
        // $(this).addClass('on')


        // $('.related-site-list').stop().slideUp(); //전체 닫혀라
        // $(this).siblings('.related-site-list').stop().slideDown(); //내가 선택한것만 해당
     

        if( $(this).hasClass('on')){
            //있어요
            $('.related-site-list').stop().slideUp();
            $('.related-site button').removeClass('on')
        }else{
            //없어요 처음클릭
            $('.related-site button').removeClass('on')
            $(this).addClass('on')

            $('.related-site-list').stop().slideUp(); 
             $(this).siblings('.related-site-list').stop().slideDown();
        }





        
    })

    $(function(){
      $('.top_btn').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},1000);
      });
    });


});