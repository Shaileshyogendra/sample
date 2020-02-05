display1 = document.getElementById('display1')
display2 = document.getElementById('display2')
but1 = document.getElementById('but1');
but2 = document.getElementById('but2');
form1 = document.getElementById('form1');
form2 = document.getElementById('form2');


function login(){
  display1.classList.remove('display');
  display2.classList.add('display');
  but2.classList.remove('color1');
  but2.classList.add('color2');
  but1.classList.add('color1');
  but1.classList.remove('color2');
  form1.classList.remove('display');
  form2.classList.add('display');
}

function register(){
  display1.classList.add('display');
  display2.classList.remove('display');
  but2.classList.add('color1');
  but2.classList.remove('color2');
  but1.classList.add('color2');
  but1.classList.remove('color1');
  form1.classList.remove('display');
  form2.classList.add('display');
}

function registerdone(){
  form1.classList.add('display');
  form2.classList.remove('display');
}
