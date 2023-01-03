var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('login_data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

document.querySelector('#btnsub').addEventListener("click", (e) => {
    var user = document.getElementById('user').value;

    if(user == "" || user == null){
    document.querySelector('#i1').style.background="red";
    document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
    document.getElementById('error1').style.color = "red";
    document.getElementById('userspan').style.color="red";
    }

    db.each(`SELECT username FROM users`, function (err, row) {
    if (err) return console.error(err.message);
    if(user == row.username){
        location.href = "login2.html";
        localStorage.setItem("userval", row.username);
    } else {
        document.querySelector('#i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error1').style.color = "red";
        document.getElementById('userspan').style.color="red";
        document.getElementById('error1').innerHTML="Incorrect username";
    }
});
e.preventDefault();
});
