$('body').on('click','.mobile-fixed-button',function(){
    $('.left-side-menu').addClass('active');
    $('.body-overlay').addClass('active');
    $(this).addClass('active');
});

$('body').on('click','.body-overlay, .mobile-fixed-button.active',function(){
    $('.body-overlay').removeClass('active');
    $('.left-side-menu').removeClass('active');
    $('.mobile-fixed-button').removeClass('active');
});