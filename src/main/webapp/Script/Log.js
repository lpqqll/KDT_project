function log(){
    const session = true;
    const state = document.getElementById("Auth")

    if(session == false){
        state.innerHTML = `
            <ul id="SessionNone">
                <li id="login"><a href="Account/LogIn.html"><span>로그인</span></a></li>
                <li id="join"><a href="Account/Join.html"><span>회원가입</span></a></li>
            </ul>
        `
    } else if(session == true){
        state.innerHTML = `
            <ul id="SessionIn">
                <li>
                    <span>'대충유저아이디님'</span>
                    <br>안녕하세요!
                </li>
                <li>
                    <img src="" alt="유저 프로필" style="width: 35px; height: 35px">
                </li>
            </ul>
        `
    }
}
log();