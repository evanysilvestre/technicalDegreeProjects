const body = document.querySelector('body')
const hexCode = document.querySelector('#hexCode')

function changeColor() {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const newColor = getRandomColor(); 

    body.style.backgroundColor = newColor; 
    hexCode.innerHTML = `The hex code of the color is ${newColor}`; 
}

