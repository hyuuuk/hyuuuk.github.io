$(function () {
    $('.tab-header').each(function (element) {
        var slider_width,
            tab_width,
            left_position,
            $active,
            $content,
            $links = $(this).find('.tab-list'),
            $currentTab = $(this).find('a.on')

        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass('on');
        $content = $($active[0].hash);
        $links.not($active).each(function () {
            $(this.hash).hide();
        });
        $(this).on('click', 'a', function (e) {
            $active.removeClass('on');
            $content.hide();
            $active = $(this);
            $content = $(this.hash);
            $active.addClass('on');
            $content.show();
            e.preventDefault();
        });
    });
    $('.my-datepicker').datepicker({
        autoClose: true,
        minDate: new Date(),
        dateFormat: 'yyyy-mm-dd',
        language: {
            days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
            daysShort: ['일', '월', '화', '수', '목', '금', '토'],
            daysMin: ['일', '월', '화', '수', '목', '금', '토'],
            months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthsShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        }
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() == 0)
            $('.main .header').removeClass('on');
        else
            $('.main .header').addClass('on');
    });
    $(".rsv-con3 .item").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    })
    var defaultValue = parseInt($('.number-wrap input').val()),
        $plus = $('.number-wrap .plus'),
        $minus = $('.number-wrap .minus');

    $plus.click(function () {
        defaultValue += 1;
        $(this).prev().val(defaultValue);
    });

    $minus.click(function () {
        defaultValue -= 1;
        if (defaultValue <= 0) {
            defaultValue = 0;
        }
        $(this).next().val(defaultValue);
    });
    $('#place-pick').change(function () {
        var place = $('#place-pick').val();
        if (place == '1') {
            $('.place-type1').addClass('on');
            $('.place-type2').removeClass('on');
        } else if (place == '2') {
            $('.place-type1').removeClass('on');
            $('.place-type2').addClass('on');
        }
    });
    $('.table-2 tr').click(function () {
        $(this).toggleClass('on');
    });
    $('.btn-menu').click(function () {
        $('.m-menu').addClass('on');
        $('.m-menu-bg').addClass('on');
    });
    $('.btn-menu-close').click(function () {
        $('.m-menu').removeClass('on');
        $('.m-menu-bg').removeClass('on');
    });
    $('.m-menu-bg').click(function () {
        $(this).removeClass('on');
        $('.m-menu').removeClass('on');
    });
    $("#check01-1").click(function () {
        if ($("#check01-1").prop("checked")) {
            $("input[type=checkbox]").prop("checked", true);
        } else {
            $("input[type=checkbox]").prop("checked", false);
        }
    })
});