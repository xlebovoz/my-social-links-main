const theme = document.getElementById('theme');
const main = document.getElementById('main_div');
const body = document.body;
const name = document.getElementById('xleb')
const develop = document.getElementById('develop')
const links = document.getElementsByClassName('links')

var theme_color = 'black';

main.style.backgroundColor = "hsl(0, 0%, 13%)"

function click() {
    console.log('clicked');
    if (theme_color === 'black') {
        theme_color = 'white';
        theme.src = 'imgs/moon.png';
        // change color to white
        body.style.backgroundImage = "linear-gradient(to left, #979797ff 0%, white 100%)";
        main.style.backgroundColor = "hsl(0, 0%, 70%)";
        name.style.color = 'hsl(0, 0%, 0%)';
        develop.style.color = 'hsla(0, 0%, 23%, 1.00)';

        for (let i = 0; i < links.length; i++) {
            links[i].style.backgroundImage = "linear-gradient(to right, #949494ff 0%, rgba(127, 127, 127, 1) 100%)";
        };



    } else if (theme_color === 'white') {
        theme_color = 'black';
        theme.src = 'imgs/sun.png';
        // change theme to black
        body.style.backgroundImage = "linear-gradient(to right, #434343 0%, black 100%)";
        main.style.backgroundColor = "hsl(0, 0%, 13%)";
        name.style.color = 'hsl(0, 0%, 100%)';
        develop.style.color = 'hsl(0, 0%, 51%)';

        for (let i = 0; i < links.length; i++) {        
            links[i].style.backgroundImage = "linear-gradient(to right, #494949 0%, rgb(44, 44, 44) 100%)";
        };


    }
    console.log(theme_color)
    console.log(main.style.backgroundColor)
}



function on_link(event) {
  const el = event.target;

  if (theme_color === 'black') {
    el.style.backgroundImage = 'linear-gradient(to right, #5b5b5b 0%, rgb(53, 53, 53) 100%)';
  } else {
    el.style.backgroundImage = 'linear-gradient(to right, #818181ff 0%, rgba(99, 99, 99, 1) 100%)';
  }
}

theme.addEventListener('click', click);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseenter', on_link);
    links[i].addEventListener('mouseleave', (e) => {
    if (theme_color === 'white') {
        e.target.style.backgroundImage = "linear-gradient(to right, #949494ff 0%, rgba(127, 127, 127, 1) 100%)";
    } else if (theme_color === 'black') {
        e.target.style.backgroundImage = "linear-gradient(to right, #494949 0%, rgb(44, 44, 44) 100%)";
    }
});
}
