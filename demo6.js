

function btn1() {
    var number = document.getElementById('number-of-tabs').value;
    var container = document.getElementById('container');
    
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    
    for(i=0;i<number;i++) {
        var input = document.createElement("input");

        container.appendChild(document.createTextNode(" "));
        input.type = "text";
        container.appendChild(input);


    }

  }


  function btn2() {


    var output = document.getElementById('result');
    var rechercher = document.getElementById('phrase3').value;

    output.innerHTML = box.match(rechercher);


  }


