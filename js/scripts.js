$(document).ready(function () {
    $("form#pingpong").submit(function (event) {
        event.preventDefault();
        var inputNum = parseInt($("input#multiply").val());
        var result = [];

        for (var i = 1; i <= inputNum; i++) {
            if (i % 15 === 0) {
                result.push("ORANGE");
            } else if (i % 5 === 0) {
                result.push("pong");
            } else if (i % 3 === 0) {
                result.push("ping");
            } else {
                result.push(" " + i);
            }
        }

        $("#result").text(result);
    });
});
