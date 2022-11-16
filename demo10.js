

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

    var container = document.getElementById('container');
    var containerv = document.getElementById('container').value;

    var output = document.getElementById('result');

    output.innerHTML = container;


  }


