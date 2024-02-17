const imgElement = document.querySelector("img");

const img1URL = "img/Ala-Too-icon.png";
const img2URL = "img/itachi.jpg";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src", img2URL);
    }
    else {
        imgElement.setAttribute("src", img1URL)
    }
}
imgElement.onclick = changePhoto; 

var header = document.getElementById("header");

var nameButton = document.getElementById("nameButton");

nameButton.addEventListener("click", function() {

    var userName = prompt("Please enter your name:" );

    if (userName !== null && userName !== "") {
        header.innerHTML = "Welcome " + userName + "!";
      } else {
        alert("Invalid name. Please try again.");
      }
    });
