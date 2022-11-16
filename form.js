


function check(){
    var names = document.getElementById('fullname').value;
        let userid = document.getElementById('userid').value;
        let birthday = document.getElementById('birthday').value;
        let country= document.getElementById('country').value;
        let adress = document.getElementById('adress').value;
        let password = document.getElementById('password').value;
        let cpassword = document.getElementById('cpassword').value;
        let accepte = document.getElementById('accepte').value;
        if(names.length > 10){
        document.getElementById('msg').innerHTML = "Your Name must contain more than" + names.length + "letters";
    }
}

