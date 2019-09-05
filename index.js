$('body').on('click','.mobile-fixed-button',function(){
    $('.left-side-menu').addClass('active');
    $('.body-overlay').addClass('active');
});

$('body').on('click','.body-overlay',function(){
    $('.body-overlay').removeClass('active');
    $('.left-side-menu').removeClass('active');
});