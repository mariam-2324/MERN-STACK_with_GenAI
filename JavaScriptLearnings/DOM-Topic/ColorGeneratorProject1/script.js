let wholeBody = document.querySelector("body");
// let btn1 = document.querySelector(".change-color-btn");



const changeBackgroundColor = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    let color = `rgb(${red}, ${green}, ${blue})`
    wholeBody.style.backgroundColor = color
}

//WITH TIMER FUNCTIONALITY:

let id = setInterval(() => {
    changeBackgroundColor()
},1000);



// AND WITH BUTTON FUNCTIONALITY:    but remember that whether the timer function would be run or the button be clicked.
// btn1.addEventListener('click', changeBackgroundColor);
