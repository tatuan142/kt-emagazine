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



/* > photoswipe */
// note            : used in article page
// import          : 'photoSwipe/dist/photoswipe.min.js', 
//                 : 'photoSwipe/dist/photoswipe-ui-default.min.js'

$(".article__body img").wrap(function(index) {
    var _this = $(this);
    var src = $(this).attr("src");
    src = src.replace("w460x", "");
    var box_desc = $(this).parent().find(".image_caption");
    if (box_desc == null) {
        box_desc = $(this).find("em");
    }
    var desc = box_desc == null ? document.title.replace("\"", "&quot;").replace("“", "&quot;").replace("”", "&quot;") : box_desc.text();
    return "<a class='photo' href='" + src + "' data-desc='" + (desc == undefined ? "" : desc) + "' data-index='" + index + "' />";
});
$('.article__body').each(function() {
    var $pic = $(this),
        getItems = function() {
            var items = [];
            $pic.find('a.photo').each(function() {
                var item = { src: $(this).attr("href"), w: 0, h: 0, title: $(this).attr("data-desc") }
                items.push(item);
            });
            return items;
        }
    var items = getItems();
    var $pswp = $('.pswp')[0];
    $pic.on('click', 'a.photo', function(event) {
        event.preventDefault();
        var $index = $(this).data('index');
        var options = {
            index: $index,
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
            tapToClose: true,
            shareEl: false,
            captionEl: true
        }

        // Initialize PhotoSwipe
        var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
        lightBox.init();
    });
});