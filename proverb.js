var proverbDiv =document.getElementById('proverb');
var proverbGenerator = document.getElementById('proverb-generator');

proverbGenerator.addEventListener('click', function(){
var getProverb = new XMLHttpRequest();
getProverb.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs')
getProverb.onload= function(){
  var myProverb =JSON.parse(getProverb.responseText);
  var myProverb= getProverb.responseText;
  addProverb(myProverb)
}

getProverb.send();
});

function addProverb(proverb){


}
