function btn1() {
    let input = document.getElementById('phrase1').value.toLowerCase().trim();
    let rechercher =document.getElementById('phrase2').value.toLowerCase().trim();
    var output = document.getElementById('result');
    output.innerHTML = input.match(rechercher);
  }



function btn2() {
    let input = document.getElementById('phrase1').value.toLowerCase().trim();
    let rechercher =
document.getElementById('phrase2').value.toLowerCase().trim();
    var output = document.getElementById('result');
    output.innerHTML = input.replace(rechercher, '');
  }




