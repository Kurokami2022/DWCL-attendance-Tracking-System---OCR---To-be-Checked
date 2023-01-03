var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('login_data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

document.querySelector('#btnsub').addEventListener("click", (e) => {
    var email = document.getElementById('email').value;

    if(email == "" || email == null){
        document.querySelector('#i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error1').style.color = "red";
        document.getElementById('emailspan').style.color="red";
    }

    db.each(`SELECT email FROM users`, function(err, row) {
        if (err) return console.error(err.message);
        if(email == row.email){
            localStorage.setItem("emailval", row.email);
            location.href = "forgot2.html";
        } else {
            document.querySelector('#i1').style.background="red";
            document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
            document.getElementById('error1').style.color = "red";
            document.getElementById('emailspan').style.color="red";
            document.getElementById('error1').innerHTML = "Email not found";
        }
    })
e.preventDefault();
})
