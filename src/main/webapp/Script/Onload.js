window.onload = function(){
    /*게정관련*/
    acc = new Account(true);

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