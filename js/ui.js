/*
* TABLE OF CONTENTS
*
*/


$('.site-header .go-back').click(function() {
    _this = $(this);

    // if(_this.hasClass('has-touched')){
    //     _this.removeClass('has-touched');
    //     $('.mask-content').removeClass('mask-is-open');
    //     $('.menu-verticle').removeClass('is-active');
    // }

    // if(!_this.hasClass('has-touched')){
        _this.toggleClass('has-touched');
        $('.mask-content').toggleClass('mask-is-open');
        $('.menu-verticle').toggleClass('is-active');
    // }
});

$('.mask-content').click(function() {
    _this = $(this);
    _this.removeClass('mask-is-open');
    $('.go-back').removeClass('has-touched');
    $('.menu-verticle').removeClass('is-active');
});
