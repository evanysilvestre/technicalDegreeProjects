const visor = document.querySelector('.visor')
const btns = document.querySelectorAll('.btn')
let count = 0

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0
        }

        if (count > 0){
            visor.style.color = 'green';
        } else if (count < 0) {
            visor.style.color = 'red';
        } else {
            visor.style.color = 'white'
        }

        visor.textContent = count
    });
});

/*Explanation
    We selected all buttons with querySelectorAll. After, we run forEach method to accessing each property and we pass in a callback function using a parameter (btn) (this function is called against each and every item.) that add an eventListener to all the buttons, one by one. The eventListener is a click, and again, we pass the callback function using a parameter and, in this case, I'll right away accesses my event object to check wich button I'm clicking. After that, we created a variable called styles that received the classList of each element. To get this classList we used the method currentTarget and the atributte classList.
*/