var textBox = document.getElementById("textbox")
var button = document.getElementById("button")
var usernameDisplay = document.getElementById("display")

function GetTextBoxUserName() {
  return textBox.value;
}

function SaveUsername(username) {
  localStorage.setItem("username", username)
}

function GetSavedUsername() {
  var savedUsername = localStorage.getItem("username")
  return savedUsername || ""
}

button.addEventListener("click", function() {
  var userName = GetTextBoxUserName()
  if (userName == "") {return}
  SaveUsername(username)
})
