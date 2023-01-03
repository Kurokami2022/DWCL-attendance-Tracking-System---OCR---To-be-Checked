document.querySelector('#btnsub').addEventListener("click", () => {
    
    var pass = document.getElementById('pass').value;
    if(pass === "" || pass == null){
        document.getElementById('i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error1').style.color = "red";
        document.getElementById('passpan').style.color="red";
    } else {
        document.getElementById('i1').style.background="";
        document.getElementById('i1').style.animation = "";
        document.getElementById('passpan').style.color="";
        document.getElementById('error1').style.color = "";
    }

    var cpass = document.getElementById('cpass').value;
    if(cpass === "" || cpass == null){
        document.getElementById('i2').style.background="red";
        document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error2').style.color = "red";
        document.getElementById('cpasspan').style.color="red";
    } else {
        document.getElementById('i2').style.background="";
        document.getElementById('i2').style.animation = "";
        document.getElementById('cpasspan').style.color="";
        document.getElementById('error2').style.color = "";
    }
})
