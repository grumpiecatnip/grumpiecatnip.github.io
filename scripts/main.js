var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/knife.png') {
      myImage.setAttribute ('src','images/knife1.png');
    } else {
      myImage.setAttribute ('src','images/knife.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Get an RTZ, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Get an RTZ, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
