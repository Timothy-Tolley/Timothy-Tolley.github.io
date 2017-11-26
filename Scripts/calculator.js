var memory  = "0";      // initialise memory variable
var current = "0";      //   value of Display ("current" value)
var operation = 0;      // records code
var maxLength = 20;     // maximum number


//add digit to display
function addDigit(dig){
  if (current.length>maxLength){
    current ="Error!!"
  }
  else {
    if ((current=="0") && (current.indexOf('.')==-1)){
      current=dig;
    }
    else{
      current=current+dig;
    }
  }
  document.getElementById('input').innerText=current;
}

//add addDigit function to button clicks
document.getElementById('zero').addEventListener("onClick",addDigit("0"));
document.getElementById('one').addEventListener("click",addDigit("1"));
document.getElementById('two').addEventListener("click",addDigit("2"));
document.getElementById('three').addEventListener("click",addDigit("3"));
document.getElementById('four').addEventListener("click",addDigit("4"));
document.getElementById('five').addEventListener("click",addDigit("5"));
document.getElementById('six').addEventListener("click",addDigit("6"));
document.getElementById('seven').addEventListener("click",addDigit("7"));
document.getElementById('eight').addEventListener("click",addDigit("8"));
document.getElementById('nine').addEventListener("click",addDigit("9"));
document.getElementById('plus').addEventListener("click",addDigit("+"));
document.getElementById('minus').addEventListener("click",addDigit("-"));
document.getElementById('times').addEventListener("click",addDigit("*"));
document.getElementById('divide').addEventListener("click",addDigit("/"));


//clear entry
function ac(){
  current="0";
  document.getElementById('input').innerText=current;
}
//EventListener
document.getElementById('ac').addEventListener("click",ac());
// clear all
function ce(){
  var memory  = "0";
  var current = "0";
  var operation = 0;
  document.getElementById('input').innerText=current;
}
//EventListener
document.getElementById('ce').addEventListener("click",ce());
// assign plus minus etc to operations
function Oper(op){
  if (op.indexOf("*")>-1){operation=1;}
  if (op.indexOf("/")>-1){operation=2;}
  if (op.indexOf("+")>-1){operation=3;}
  if (op.indexOf("-")>-1){operation=4;}

  memory=current;
  current="0";
  document.getElementById('input').innerText=current;
}
//calculations
function calc(){
  if (operation==1){current=eval(memory)* eval(current);}
  if (operation==2){current=eval(memory)/ eval(current);}
  if (operation==3){current=eval(memory)+ eval(current);}
  if (operation==4){current=eval(memory)- eval(current);}

  operation=0;
  memory="0";
  if (current.length>maxLength){
    current="error!!"
  }
  document.getElementById('input').innerText=current;

}
