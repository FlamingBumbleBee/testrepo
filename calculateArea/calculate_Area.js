let lenght;
let width;
let radius;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateCArea() {
    radius = parseFloat(document.getElementById('radius').value);
    let carea = 3.14159*radius*radius;
    document.getElementById('cresult').innerText = `The area of the circle is: ${carea}`;
}