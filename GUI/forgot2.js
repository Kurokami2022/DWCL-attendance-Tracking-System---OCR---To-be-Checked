var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('login_data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

document.querySelector('#btnsub').addEventListener("click", (e) => {
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;

    if(pass == "" || pass == null){
        document.querySelector('#i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error1').style.color = "red";
        document.getElementById('passpan').style.color="red";
    }

    if(cpass == "" || cpass == null){
        document.querySelector('#i2').style.background="red";
        document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error2').style.color = "red";
        document.getElementById('cpasspan').style.color="red";
    }
    var getemail = localStorage.getItem('emailval');
    db.run(`UPDATE users SET password = '${pass}', confirm_password = '${cpass}' WHERE email = '${getemail}'`, 
    function(err, row) {
        if (err) return console.error(err.message);
        if(pass != "" && cpass != "" && pass == cpass){
            location.href = "login.html";
        } else {
         if (pass == ""){
            document.querySelector('#i1').style.background="red";
            document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
            document.getElementById('error1').style.color = "red";
            document.getElementById('passpan').style.color="red";
            document.getElementById('error1').innerHTML = "Please enter password";
        } 
        if(cpass == ""){
            document.querySelector('#i2').style.background="red";
            document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
            document.getElementById('error2').style.color = "red";
            document.getElementById('cpasspan').style.color="red";
            document.getElementById('error2').innerHTML = "Password did not match";
        }
        if(cpass != pass) {
            document.querySelector('#i2').style.background="red";
            document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
            document.getElementById('error2').style.color = "red";
            document.getElementById('cpasspan').style.color="red";
            document.getElementById('error2').innerHTML = "Password did not match";
        }
    }
    })
e.preventDefault();
})
