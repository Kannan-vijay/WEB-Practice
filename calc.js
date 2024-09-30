function add()
{
    let n1=Number(document.getElementById("num1").value)
    let n2=Number(document.getElementById("num2").value)
    let res=n1+n2
    let result=document.getElementById("result")
    result.innerHTML= "answer = " +res
}
function sub()
{
    let n1=Number(document.getElementById("num1").value)
    let n2=Number(document.getElementById("num2").value)
    let res=n1-n2
    let result=document.getElementById("result")
    result.innerHTML="answer = " +res
}
function mult()
{
    let n1=Number(document.getElementById("num1").value)
    let n2=Number(document.getElementById("num2").value)
    let res=n1*n2
    let result=document.getElementById("result")
    result.innerHTML="answer = " +res
}
function divi()
{
    let n1=Number(document.getElementById("num1").value)
    let n2=Number(document.getElementById("num2").value)
    let res=n1/n2
    let result=document.getElementById("result")
    result.innerHTML="answer = " +res.toFixed(2)
}