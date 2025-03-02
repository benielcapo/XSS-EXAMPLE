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
  console.log("saved username is " + savedUsername)
  return savedUsername || ""
}

function LoadUsername() {
  var userName = GetSavedUsername()
  usernameDisplay.innerHTML = userName
}

button.addEventListener("click", function() {
  var userName = GetTextBoxUserName()
  if (userName == "") {return}
  SaveUsername(username)
})

LoadUsername()
