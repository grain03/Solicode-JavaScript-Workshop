
function btn1() {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML= num1 + num2;

document.getElementById("result1").style.display = "block";
bg1.classList.add("active"); 
bg2.classList.remove("active");
bg3.classList.remove("active");
bg4.classList.remove("active");
}


function btn2() {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML= num1 - num2;

document.getElementById("result1").style.display = "block";
bg2.classList.add("active"); 
bg1.classList.remove("active");
bg3.classList.remove("active");
bg4.classList.remove("active");


}


function btn3() {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML= num1 * num2;

document.getElementById("result1").style.display = "block";
bg2.classList.remove("active");
bg3.classList.add("active"); 
bg2.classList.remove("active");
bg1.classList.remove("active");
bg4.classList.remove("active");

}





function btn4() {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML= num1 / num2;

document.getElementById("result1").style.display = "block";
bg4.classList.add("active"); 
bg3.classList.remove("active");
bg2.classList.remove("active");
bg3.classList.remove("active");
bg1.classList.remove("active");


}




