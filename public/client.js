var input = document.getElementById("message");
input.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("send").click();
    }
});

$(function () {
    var msg = $('#message')
    var ans = $('#answer')

    $("#send").on('click', function () {
        if (msg.val() == "") {
            alert("Please enter a message.")
        }
        else {
            $.ajax({
                type: 'post',
                url: '/myform',
                data: {
                    message: msg.val()
                },
                success: function (answer) {
                    ans.append('@echo: ' + answer.reply + '</br>');
                    msg.val("");
                    console.log(answer);
                },
                error: function () {
                    alert("error saving message.");
                }
            });
        }
    });
});

