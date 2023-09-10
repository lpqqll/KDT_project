class Account{
    constructor(Session) {
        this.account_condition = false;
        this.Session = Session;
        this.log();
    }
    log(){
        const state = document.getElementById("Auth");
        if(this.Session === false){
            state.innerHTML = `
            <ul id="SessionNone">
                <li id="login"><a href="../Account/LogIn.html"><span>로그인</span></a></li>
                <li id="join"><a href="../Account/Join.html"><span>회원가입</span></a></li>
            </ul>
        `;
        } else if(this.Session === true){
            state.innerHTML = `
            <ul id="SessionIn" onclick="acc.showAccount();">
                <li>
                    <span>'대충유저아이디님'</span>
                    <br>안녕하세요!
                </li>
                <li id="userProfile">
                    <img src="../Style/Fox.png" alt="">
                </li>
                
            </ul>
            <ul id="management"><!--style="display: none"-->
                <span>Leiaira92@gmail.com</span>
                <li><a href="../Account/MyPage.html">계정관리</a></li>
                <li><a href="#">대시보드</a></li>
                <li><a href="#">로그아웃</a></li>
            </ul>
        `;
        }
    }

    showAccount(){
        if(this.account_condition == false){
            let st = document.getElementById("management").style;
            console.log(this.account_condition);
            // st.display = 'inline-flex';
            st.visibility = 'visible'
            this.account_condition = true;
        } else if(this.account_condition == true){
            this.hideAccount();
        }
    }
    hideAccount(){
        let st = document.getElementById("management").style;
        console.log(this.account_condition);
        // st.display = 'none';
        st.visibility = 'hidden'
        this.account_condition = false;
    }
}