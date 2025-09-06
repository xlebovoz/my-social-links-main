const theme = document.getElementById('theme');
var theme_color = 'black';
const body = document.body;

function click() {
    console.log('clicked');
    if (theme_color === 'black') {
        theme_color = 'white';
        theme.src = 'imgs/moon.png';
        // change color to white
        document.body.style.backgroundImage = "linear-gradient(to left, #979797ff 0%, white 100%)";



    } else if (theme_color === 'white') {
        theme_color = 'black';
        theme.src = 'imgs/sun.png';
        // change theme to black
        document.body.style.backgroundImage = "linear-gradient(to right, #434343 0%, black 100%)";


    }
    console.log(theme_color)
}


theme.addEventListener('click', click)