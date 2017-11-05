var xhr = new XMLHttpRequest();
xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr.response);
