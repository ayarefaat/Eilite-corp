$(function (){
    let windowHeight = $(window).height();
    let upperHeight = $('.upper-bar').innerHeight();
    let navHeight = $('.navbar').innerHeight();
    $('.slider').height(windowHeight - (upperHeight + navHeight))
    $('.carousel-item').height(windowHeight - (upperHeight + navHeight))

    // featured work filter image
    $('.featured-work ul li').on('click' , function(){
        $(this).addClass('active').siblings().removeClass('active');
        // console.log($(this).data('class'))
        if($(this).data('class') === 'all'){
            $('.work .image').css('opacity' , 1)
        }else{
            $('.work .image').css('opacity' , 0.09)
            $($(this).data('class')).parent().css('opacity',1)
        }
    });
    // $('.carousel-indicators li').on('click' , function(){
    //     $(this).addClass('active').siblings().removeClass('active')
    //     console.log($(this))
    // })
})