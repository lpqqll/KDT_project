window.onload = function(){
    /*게정관련*/
    acc = new Account(true);


 let start = document.getElementById("start");
    if(acc.Session === false){
        start.href="/KDT_project/Account/LogIn.html";
        start.innerHTML = "로그인";

    } else if(acc.Session === true){
        start.href="/KDT_project/Account/dashBoard.html";
        start.innerHTML = "Go to DashBoard";
        start.style.width = "200px";
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