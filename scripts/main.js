const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/wave.jpg") {
    myImage.setAttribute("src", "images/cloud.jpg");
  } else {
    myImage.setAttribute("src", "images/wave.jpg");
  }
}

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Katch the Kurrent, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Katch the Kurrent, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
