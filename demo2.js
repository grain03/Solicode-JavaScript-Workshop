
function btn1() {
    let day = parseInt(document.getElementById('number1').value);
    let month = parseInt(document.getElementById('number2').value);
    let year = parseInt(document.getElementById('number3').value);

document.getElementById("result1").style.display = "block";
  
    if (day <= 31 && day >= 1 && month <= 12 && month !== 2 && month !== 4 && month !== 6 && month !== 9 && month !== 11 && year <= 2022 && year >= 1999){
        document.getElementById('incorrecte').innerHTML = day + "/" + month + "/" + year + " est correcte";
         

       }
        else if(day <= 30 && month == 4 && month == 6 && month == 9 && month == 11 && year <= 2022 && year >= 1999){
            document.getElementById('incorrecte').innerHTML = day + "/" + month + "/" + year + " est correcte !!"

        }
        else if(day < 29 && month == 02 && year <= 2022 && year >= 1999){
            document.getElementById('incorrecte').innerHTML = day + "/" + month + "/" + year + " est correcte !!"           
        }
        else{
            document.getElementById('incorrecte').innerHTML = day + "/" + month + "/" + year + " est incorrecte !!"           
        }

}






