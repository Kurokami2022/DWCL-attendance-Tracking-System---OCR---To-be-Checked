var email = "@dwcl.edu.ph";
document.getElementById('email').innerHTML = email;

function go(form) {
    var verify = frm.txtverify.value;

    if(verify === "" || verify == null){
        document.getElementById('i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('verispan').style.color="red";
    } else {
        document.getElementById('i1').style.background="";
        document.getElementById('i1').style.animation = "";
        document.getElementById('verispan').style.color="";
    }

}
