

function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    var principal=document.getElementById("principal").value;
    if(principal<=0 || principal==null){
alert("Enter a positive number: ");
    }
var rate=document.getElementById("rate").value;
var years=document.getElementById("years").value;

var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
 var p='If you deposit '+principal+',\<br\>'+'at an interest rate of '+rate+'.\<br\>'+'You will recieve an amount of '+interest+',\<br\>'+'in the year '+year
 document.getElementById('result').innerHTML=p;   
    
}
        