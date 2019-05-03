$(function () {
    $("#datepicker").datepicker({
        dateFormat: 'yy-mm-dd'
    });
    $(".allcheck").click(function () {
        var chkBoxes = $(".check01");
        if ($(".allcheck").prop("checked")) {
            chkBoxes.prop("checked", true);
            chkBoxes.siblings().addClass('active');
        } else {
            chkBoxes.prop("checked", false);
            chkBoxes.siblings().removeClass('active');
        }
    });
    $(".check01").click(function () {
        var allChk = $(".allcheck");
        var eachChk = $(".check01");
        var eachChkLength = 0;

        if (allChk.prop("checked") === true) {
            allChk.prop("checked", false);
            allChk.siblings().removeClass('active');
        } else {
            for (var i = 0; i < eachChk.length; i++) {
                if ($(eachChk.get(i)).prop("checked") === true) {
                    eachChkLength++;
                } else {
                    eachChkLength--;
                }
            }
            if (eachChk.length === eachChkLength) {
                allChk.prop("checked", true);
                allChk.siblings("label").addClass('active');
            }
        }
    });
});