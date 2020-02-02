// $(document).ready(function () {
//     $("form#pingpong").submit(function (event) {
//         event.preventDefault();
//         var inputNum = parseInt($("input#multiply").val());
//         var resultEl = $('#result')//.empty();
//         for (var i = 1; i <= inputNum; i++) {
//             var item;
//             if (i % 15 === 0) {
//                 item = "ORANGE";
//             } else if (i % 5 === 0) {
//                 item = "pong";
//             } else if (i % 3 === 0) {
//                 item = "ping";
//             } else {
//                 item = i;
//             }
//             $('<li>').text(item).appendTo(resultEl);
//         }
//     });
// });


$(document).ready(function () {
    $("form#pingpong").submit(function (event) {
        event.preventDefault();
        var inputStr = $("#multiply").val();
        if(inputStr === '') {
            alert('Please enter a number');
            return;
        }
        var inputNum = parseInt(inputStr);
        if(Number.isNaN(inputNum)) {
            alert("Please enter a number");
            return;
        }
        if(inputNum <= 0) {
            alert("Please enter a number > 1");
            return;
        }
        var resultEl = $('#result').empty();
        for (var i = 1; i <= inputNum; i++) {
            var item;
            if (i % 15 === 0) {
                $('<li>').text("Orange").appendTo(resultEl);
            } else if (i % 5 === 0) {
                $('<li>').text("pong").appendTo(resultEl);
            } else if (i % 3 === 0) {
                $('<li>').text("ping").appendTo(resultEl);
            } else {
                $('<li>').text(i).appendTo(resultEl);
            }
        }
    });
});
