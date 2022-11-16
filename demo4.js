
function btn() {
     document.getElementById("result1").style.display = "block";
     var inputedvoyelles = document.getElementById('voyelles').value;
     inputedvoyelles = inputedvoyelles.toLowerCase();
     let count = 0;
     for(i = 0; i < inputedvoyelles.length; i++) {
       if(inputedvoyelles.charAt(i) == 'a' || inputedvoyelles.charAt(i) == 'e' || inputedvoyelles.charAt(i) == 'y'|| inputedvoyelles.charAt(i) == 'i' || inputedvoyelles.charAt(i) == 'o' || inputedvoyelles.charAt(i) == 'u') {
         count++;
       }
       
     }
     document.getElementById('result').innerHTML = "La phrase que vous avez saisi contient " + count + " voyelles";
   }







