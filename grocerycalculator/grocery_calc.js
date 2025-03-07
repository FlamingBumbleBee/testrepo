let grocery_1;
let grocery_2;
let grocery_3;

function addGrocery() {
    grocery_1 = parseFloat(document.getElementById('grocery_1').value);
    grocery_2 = parseFloat(document.getElementById('grocery_2').value);
    grocery_3 = parseFloat(document.getElementById('grocery_3').value);

    let grocery_total = grocery_1 + grocery_2 + grocery_3;
    document.getElementById('result').innerText = `The total amount is: $ ${grocery_total}`;
}