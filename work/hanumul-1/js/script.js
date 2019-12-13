$(function () {
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
});