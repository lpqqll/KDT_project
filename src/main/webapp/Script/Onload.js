window.onload = function(){
    /*게정관련*/
    acc = new Account(false);

    if(acc.Session === false){
        document.getElementById("start").href="../Account/LogIn.html";
    } else if(acc.Session === true){
        document.getElementById("start").href="../Account/dashBoard.html";
    }

    /*하단 광고*/
    setPosterList();
    timer = setInterval(posterMove, 10);

    document.getElementById("imgView").onmouseover = function(){
        clearInterval(timer);
    };

    document.getElementById("imgView").addEventListener('mouseout',function(){
        timer = setInterval(posterMove, 10);
    });
}