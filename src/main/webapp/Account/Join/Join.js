function validationCheck(){
    let userid = document.getElementById("Id").value;
    console.log(userid);
    let Email_reg = /^\w{4,14}[@][a-z]{2,8}[.][a-z]{2,3}([.][a-z]{2,3})?$/;
    if (userid === ""){
        alert("이메일을 입력하세요.");
        return false;
    } else if(!Email_reg.test(userid)){
        alert("이메일을 잘못 입력하셨습니다.");
        return false;
    }
}