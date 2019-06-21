(function() {
    window.onload = function() {
        var okBuu = document.getElementById("fgg");
        ballImg.onclick = okayclick;

        var flag = 0;

        function okayclick() {
            alert("msj");
            if (flag == 0) {
                ballImg.src = "/img/twitter.png";
                ballImg.onclick = okayclick;
                flag = 1;
            } else {
                ballImg.src = "/img/facebook.png";
                flag = 0;
            }
        }
    }
});