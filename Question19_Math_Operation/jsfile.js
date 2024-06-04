var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var result = document.getElementById("result");

document.getElementById("add").addEventListener("click", function () {
  result.value = parseInt(n1.value) + parseInt(n2.value);
});
document.getElementById("sub").addEventListener("click", function () {
  result.value = parseInt(n1.value) - parseInt(n2.value);
});
document.getElementById("mult").addEventListener("click", function () {
  result.value = parseInt(n1.value) * parseInt(n2.value);
});
document.getElementById("div").addEventListener("click", function () {
  result.value = parseInt(n1.value) / parseInt(n2.value);
});