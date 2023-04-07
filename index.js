function funct1(){
    var containers = document.querySelectorAll('.container');
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.display = 'inline-block';
    }
}

function funct2(){
    var containers = document.querySelectorAll('.container');
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].id === 'con1') {
        containers[i].style.display = 'inline-block';
      } else {
        containers[i].style.display = 'none';
      }
    }
}
function funct3(){
    var containers = document.querySelectorAll('.container');
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].id === 'con2') {
        containers[i].style.display = 'inline-block';
      } else {
        containers[i].style.display = 'none';
      }
    }
}
    
// Get references to all the buttons
const allButton = document.getElementById("allButton");
const htmlCssJsButton = document.getElementById("htmlCssJsButton");
const reactButton = document.getElementById("reactButton");

// Add event listeners to each button
allButton.addEventListener("click", function() {
  allButton.style.color = "yellow";
  htmlCssJsButton.style.color = "white";
  reactButton.style.color = "white";
});

htmlCssJsButton.addEventListener("click", function() {
  allButton.style.color = "white";
  htmlCssJsButton.style.color = "yellow";
  reactButton.style.color = "white";
});

reactButton.addEventListener("click", function() {
  allButton.style.color = "white";
  htmlCssJsButton.style.color = "white";
  reactButton.style.color = "yellow";
});







// function funct2(){
//     const con1 = document.getElementById('con1');
//     const con2 = document.getElementById('con2');
//     con1.style.display = 'block';
//     con2.style.display = 'none';


//     const a = document.getElementById('a');
//     const b = document.getElementById('b');
//     const c = document.getElementById('c');
//     a.style.display = 'none';
//     b.style.display = 'block';
//     c.style.display = 'none';

// }
// function funct3(){
//     const con1 = document.getElementById('con1');
//     const con2 = document.getElementById('con2');
//     con1.style.display = 'none';
//     con2.style.display = 'block';

//     con1.style.display = 'inline-block' ;
//     con2.style.display = 'inline-block' ;

//     const a = document.getElementById('a');
//     const b = document.getElementById('b');
//     const c = document.getElementById('c');
//     a.style.display = 'none';
//     b.style.display = 'none';
//     c.style.display = 'block';

// }


// function funct1(){
//     const con1 = document.getElementById('con1');
//     const con2 = document.getElementById('con2');

//     con1.style.display = 'block';
//     con2.style.display = 'none';

//     con1.style.display = 'inline-block' ;

//     const a = document.getElementById('a');
//     const b = document.getElementById('b');

//     a.style.display = 'block';
//     b.style.display = 'none';
    
// }

// function func2(){
//     const con1 = document.getElementById('con1');
//     const con2 = document.getElementById('con2');
//     const con3 = document.getElementById('con3');
//     const con4 = document.getElementById('con4');
//     const con5 = document.getElementById('con5');
//     const con6 = document.getElementById('con6');

//     con1.style.display = 'block';
//     con2.style.display = 'block';
//     con3.style.display = 'block';
//     con4.style.display = 'none';
//     con5.style.display = 'none';
//     con6.style.display = 'none';

//     con1.style.display = 'inline-block' ;
//     con2.style.display = 'inline-block' ;
//     con3.style.display = 'inline-block' ;


//     const a = document.getElementById('a');
//     const b = document.getElementById('b');
//     const c = document.getElementById('c');
//     const d = document.getElementById('d');

//     a.style.display = 'none';
//     b.style.display = 'block';
//     c.style.display = 'none';
//     d.style.display = 'none';

// }

// function func3(){
//     const con1 = document.getElementById('con1');
//     const con2 = document.getElementById('con2');
//     const con3 = document.getElementById('con3');
//     const con4 = document.getElementById('con4');
//     const con5 = document.getElementById('con5');
//     const con6 = document.getElementById('con6');

//     con1.style.display = 'block';
//     con2.style.display = 'none';
//     con3.style.display = 'block';
//     con4.style.display = 'none';
//     con5.style.display = 'none';
//     con6.style.display = 'none';

//     con1.style.display = 'inline-block' ;
//     con3.style.display = 'inline-block' ;


//     const a = document.getElementById('a');
//     const b = document.getElementById('b');
//     const c = document.getElementById('c');
//     const d = document.getElementById('d');

//     a.style.display = 'none';
//     b.style.display = 'none';
//     c.style.display = 'block';
//     d.style.display = 'none';
    
// }

// function func4(){
//     const con1 = document.getElementById('con1');
//     const con2 = document.getElementById('con2');
//     const con3 = document.getElementById('con3');
//     const con4 = document.getElementById('con4');
//     const con5 = document.getElementById('con5');
//     const con6 = document.getElementById('con6');

//     con1.style.display = 'block';
//     con2.style.display = 'none';
//     con3.style.display = 'none';
//     con4.style.display = 'none';
//     con5.style.display = 'none';
//     con6.style.display = 'none';

//     con1.style.display = 'inline-block' ;


//     const a = document.getElementById('a');
//     const b = document.getElementById('b');
//     const c = document.getElementById('c');
//     const d = document.getElementById('d');

//     a.style.display = 'none';
//     b.style.display = 'none';
//     c.style.display = 'none';
//     d.style.display = 'block';
    
// }