// print the factorial of the number

function number_fact() {
    let str = prompt('factorial');
    let num = parseInt(str);
    let fact = 1;
    for (let i = num; i > 0; i = i - 1) {
        fact = fact * i;
    }
    alert(fact);
}