const myImage  = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/duck1.jpg"){
        myImage.setAttribute("src","images/duck2.jpg");
    }
    else{
        myImage.setAttribute("src","images/duck1.jpg");
    }
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUsername(){
    const myName = prompt("Please enter your name.");
    if (myName){
        localStorage.setItem("name",myName);
        myHeading.textContent = `Hi ${myName}, welcome to HyperDuck Lite!`;
    }
    else{
        myHeading.textContent = `Welcome to HyperDuck Lite!`;
    }
}

if(!localStorage.getItem("name")){
    setUsername();
}
else{
    const storedName =  localStorage.getItem("name");
    if (!storedName) {
        setUsername();
    }
    else{
        myHeading.textContent = `Hi ${storedName}, welcome to HyperDuck Lite!`
    }
}

myButton.onclick = () =>{
    setUsername();
};