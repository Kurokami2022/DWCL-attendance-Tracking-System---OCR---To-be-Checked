var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('login_data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

document.querySelector('#btnsub').addEventListener("click", (e) => {
    var pass = document.getElementById('pass').value;

    if(pass == "" || pass == null){
    document.querySelector('#i2').style.background="red";
    document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
    document.getElementById('error2').style.color = "red";
    document.getElementById('passpan').style.color="red";
    }
    var getuser = localStorage.getItem('userval');

    db.each(`SELECT password FROM users WHERE username = '${getuser}'`, function (err, row) {
    if (err) return console.error(err.message);
    if(pass == row.password){
        location.href = "main.html";
    } else {
        document.querySelector('#i2').style.background="red";
        document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error2').style.color = "red";
        document.getElementById('passpan').style.color="red";
        document.getElementById('error2').innerHTML="Incorrect password";
    }
});
e.preventDefault();
});
