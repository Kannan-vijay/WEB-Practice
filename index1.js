
   let pass=document.getElementById("passs");
   let imag=document.getElementById("eye");
    let pass1=document.getElementById("passs1");
    let imag1=document.getElementById("eye1");
function showpassword()
{
   
    if(pass.type=="password"){
        pass.type="text";
        imag.src="eyeopen.png"
    }  
    else{
        pass.type="password";
        imag.src="eyeclose.png"
    }
}
function showpassword1()
{
  
    if(pass1.type=="password"){
        pass1.type="text";
        imag1.src="eyeopen.png"
    }  
    else{
        pass1.type="password";
        imag1.src="eyeclose.png";
    }
}
