function validationCheck(){
    let userid = document.getElementById("Id").value;
    let Email_reg = /^\w{4,14}[@][a-z]{2,8}[.][a-z]{2,3}([.][a-z]{2,3})?$/;
    if (userid === ""){
        alert("이메일을 입력하세요.");
        return false;
    } else if(!Email_reg.test(userid)){
        alert("이메일을 잘못 입력하셨습니다.");
        return false;
    }
    let UserPw = document.getElementById("Pw").value;
    let PwCheck = document.getElementById("Pw_Check").value;
    if(UserPw != PwCheck){
        alert("비밀번호가 같지 않습니다");
        return false;
    }
}