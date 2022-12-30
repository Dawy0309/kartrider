//網頁載入之圖片文字動畫
document.addEventListener("DOMContentLoaded", function () {
    var loading = new TimelineMax();
    loading.fromTo(".upperTitle", 0.3, {
        autoAlpha: 0,
        y: -20
    }, {
        autoAlpha: 1,
        y: 0
    })
        .fromTo(".upperCarousel1", 0.4, {
            autoAlpha: 0,
            y: 20,
        }, {
            autoAlpha: 1,
            y: 0,
        })
        .fromTo(".upperCarouselText", 0.4, {
            autoAlpha: 0,
            y: 20,
        }, {
            autoAlpha: 1,
            y: 0,
        }, "-=0.3");
});

//回到頁首
$(function () {
    var $win = $(window);
    var $backToTop = $('.js-back-to-top');
    
    // 當用戶滾動到離頂部超過300像素時，展示回到頁首按鈕
    $win.scroll(function () {
        if ($win.scrollTop() > 300) {
            $backToTop.show();
        } else {
            $backToTop.hide();
        }
    });

    // 當用戶點擊按鈕時，通過動畫效果返回頭部
    $backToTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 200);
    });
});