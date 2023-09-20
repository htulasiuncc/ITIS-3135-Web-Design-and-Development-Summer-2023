function addNumbers()
{
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 + num2;
}

function subNumbers()
{
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy()
{
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 / num2;
}

function modulusOf() 
{ 
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 % num2;
}