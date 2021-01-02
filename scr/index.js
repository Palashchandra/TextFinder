var maintext = document.querySelector("#maintext");
var findtext = document.querySelector("#findtext");
var result = document.querySelector("#result");

findtext.addEventListener("keypress", function() {
  var match = maintext.value.indexOf(findtext.value);
  if (match === -1) {
    result.innerHTML = `The value 
    ${findtext.value} was not found`;
  } else {
    result.innerHTML = `The value 
    ${findtext.value} was found at
    ${match}`;
  }
});
