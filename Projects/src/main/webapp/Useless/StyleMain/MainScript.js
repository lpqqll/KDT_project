class PopUp {
    constructor(Session) {
        this.nav_condition = false;
        this.account_condition = false;
        this.Session = Session;
    }
    /*Navigation Bar*/
    showNav(){
        if(this.nav_condition === false){
            document.getElementById("headContainer").style.borderBottomLeftRadius = "0px";
            document.getElementById("navSection").style.transform = "translateX(250px)";
            this.nav_condition = true;
        } else if(this.nav_condition === true){
            this.hideNav();
        }
    }
    hideNav(){
        document.getElementById("headContainer").style.borderBottomLeftRadius = "10px";
        document.getElementById("navSection").style.transform = "translateX(0px)";
        this.nav_condition = false;
    }

    /*AccountAccess Bar*/
    showAccount(){
        if(this.account_condition == false){
            let st = document.getElementById('Log' + this.Session).style;
            st.display = 'block';
            // st.transition = '1s'
            // st.transform = 'translateY(75px)';
            document.getElementById('headContainer').style.borderBottomRightRadius = '0px';
            this.account_condition = true;
        } else if(this.account_condition == true){
            this.hideAccount();
        }
    }
    hideAccount(){
        let st = document.getElementById('Log' + this.Session).style;
        // st.transform = 'translateY(0px)';
        st.display = 'none';
        document.getElementById('headContainer').style.borderBottomRightRadius = '10px';
        this.account_condition = false;
    }
}
