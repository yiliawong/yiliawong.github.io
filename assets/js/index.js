/**
 * Created by galen on 16/12/4.
 */

$(function() {
    var $scene = $('#scene').parallax();

    var imgs = {
        '1': location.href + 'assets/img/circle01.jpg',
        '2': location.href + 'assets/img/circle02.jpg',
        '3': location.href + '/assets/img/circle03.jpg',
        '4': location.href + '/assets/img/circle04.jpg',
        '5': location.href + '/assets/img/circle05.jpg',
        '6': location.href + '/assets/img/circle06.jpg',
        '7': location.href + '/assets/img/circle07.jpg',
        '8': location.href + '/assets/img/circle08.jpg',
        '9': location.href + '/assets/img/circle09.jpg',
        '10': location.href + '/assets/img/circle10.jpg',
        '11': location.href + '/assets/img/circle11.jpg',
        '12': location.href + '/assets/img/circle12.jpg'
    };

    for (var img in imgs) {
        var $link = $('<link rel="prefetch" href="' + imgs[img] +'"/>');
        $('body').append($link);
    }

    var count = 200;
    for (var i = 0; i < 3; i++) {
        var layer = $('#star' + i);
        var width = layer.width();
        var height = layer.height();

        for (var j = 0; j < count; j++) {
            var y = Math.random() * height;

            var star = document.createElement('div');
            // 50 < speed < 150
            var speed = 1000 * (Math.random() *  100 + 50);
            star.setAttribute('class', 'star' + i);
            layer.append(star);
            star.style.top = y + 'px';

            if (j % 50 === 0) {
                star.style.animation = 'flash ' + (Math.random() * 5 + 1) + 's ease infinite';
            }

            star.animate([{transform: 'translate3d(' + width + 'px, ' + y + 'px, 0)'},
                    {transform: 'translate3d(-' + Math.random() * 256 + 'px, ' + y + 'px, 0)'}],
                {delay: Math.random() * -speed, duration: speed, iterations: 1000});
        }
    }

    var $slides = $('.slides');
    var $anchor = $('.anchor .circle');

    var timeout;

    // 触发background
    $anchor.mouseenter(function (event) {
        if (timeout) {
            clearTimeout(timeout);
        }
        var num = event.currentTarget.className.replace(/circle/g, '').trim();
        $slides.css('transition', 'background .6s ease-in').css('background', 'url(' + imgs[num] + ') no-repeat');
    });

    // 10秒后取消background
    $anchor.mouseleave(function (event) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            $slides.animate({
                opacity: 0.2
            }, 2000, function () {
                $slides.css('opacity', '1').css('background', '');
            });
        }, 10 * 1000);
    });
});