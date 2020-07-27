function notify() {
    document.getElementById('right-pin').style.display = 'none';
    document.getElementById('wrong-pin').style.display = 'none';
}

document.getElementById('pin-generator').addEventListener('click', function () {
    const randomNumber = Math.random() * (9999 - 1000) + 1000;
    const randomPin = Math.round(randomNumber);
    document.getElementById('generated-pin').value = randomPin;
    document.getElementById('insert-pin').value = ' ';
    notify();
})
 
function calcBody(number) {
    document.getElementById('insert-pin').value += number;
}
document.getElementById('clear-all').addEventListener('click', function () {
    document.getElementById('insert-pin').value = ' ';
    notify();
})
document.getElementById('backspace').addEventListener('click', function () {
    document.getElementById('insert-pin').value = document.getElementById('insert-pin').value.slice(0, -1);
    notify();
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const generatedPin = parseFloat(document.getElementById('generated-pin').value);
    const InsertedPin = parseFloat(document.getElementById('insert-pin').value);
    if (generatedPin === InsertedPin) {
        document.getElementById('right-pin').style.display = 'block';        
    }
    if (generatedPin != InsertedPin) {        
        document.getElementById('wrong-pin').style.display = 'block';                
    }    
})

//Code for 3 time try.

/** 
document.getElementById('submit-btn').addEventListener('click', function () {
    const generatedPin = parseFloat(document.getElementById('generated-pin').value);
    const InsertedPin = parseFloat(document.getElementById('insert-pin').value);
    var number = parseFloat(document.getElementById('action').innerText);
    if (generatedPin != InsertedPin) {        
        var left = number - 1;
        document.getElementById('action').innerText = left;   
    }
    if (generatedPin === InsertedPin) {
        document.getElementById('action').innerText = '3';
        document.getElementById('wrong-pin').style.display = 'none';
    }
    if (number === 1 && generatedPin != InsertedPin) {
        document.getElementById("submit-btn").disabled = true;
        
    }
})
*/