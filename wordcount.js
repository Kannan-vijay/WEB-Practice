function wordcount()
{
    let str1=document.getElementById("para").value
    let res=str1.length
    let result=document.getElementById("result")
    result.innerHTML= "Total letters are " +res
}