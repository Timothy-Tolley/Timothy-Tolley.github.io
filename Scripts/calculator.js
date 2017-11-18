var addToInput= function (val){
  var field= document.getElementById("input");
  field.innerHTML=val;
}




document.addEventListener("click", addToInput(document.getElementById(x).value));

function addItem(){
        var li = document.createElement("LI");
        var input = document.getElementById("add");
        li.innerHTML = input.value;
        input.value = "";

        document.getElementById("faves").appendChild(li);
    }
