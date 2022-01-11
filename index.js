// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    // Check all slides and initialize video players
    var swiper = document.querySelector('.swiper');
    var slides = swiper.getElementsByClassName('swiper-slide')

    var players = {};

    for (var i = 0; i < slides.length; i++) {
        var element = slides[i].getElementsByClassName('yt-player')[0];
        if (!element) {
            players[i] = null;
            return;
        }

        var id = element.getAttribute('data-id');
        if (!element) {
            players[i] = null;
            return;
        }

        var autoplay = i === 0 ? 1 : 0;

        players[i] = new YT.Player(element, {
            height: '315',
            width: '560',
            videoId: id,
            playerVars: {
                autoplay: autoplay,
                mute: autoplay, // autoplay at load
                rel: 0,
                controls: 0,
                iv_load_policy: 3, // hide annotations
                fs: 0, // disable fullscreen
                loop: 1,
                playlist: id, // loop single video
            }
            // events: {
            //   'onReady': onPlayerReady,
            //   'onStateChange': onPlayerStateChange
            // }
        });
    }

    var mySwiper = new Swiper('.swiper', {
        //     effect: 'slide',
        //     spaceBetween: 0,
        //     slidesPerView: 1,
        //     centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function (swiper) {
                //         if (players[swiper.previousIndex]) {
                //           players[swiper.previousIndex].pauseVideo();
                //         }

                //         if (players[swiper.activeIndex]) {
                //           players[swiper.activeIndex].playVideo();
                //         }
            }
        }
    });

}