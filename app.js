const success = document.querySelector('.alert-success');
const notEnoughDigit = document.querySelector('.alert-warning');
const fail = document.querySelector('.alert-danger');

function generateNumber(){
    numberText = document.getElementById('id-number');
    numID = Math.floor(Math.random() * 999999999) + 100000000;
    stringID = numID.toString();
    var x = 0, y = 0, z= 0;
    for (let i = 0; i < 10; i+=2) {
        x += parseInt(stringID[i]);
    }
    for (let i = 1; i < 9; i+=2) {
        y += parseInt(stringID[i]);
    }
    stringID += (x * 7 - y) % 10;

    for (let i=0; i<10; i+=1){
        z += parseInt(stringID[i]);
    }
    stringID += z % 10;

    if(stringID.length > 11) {
        generateNumber();
    }
    else {
        numberText.innerText = stringID;
    }
}

function copyNumber(){
    var numberText = document.getElementById('id-number');
    navigator.clipboard.writeText(numberText.innerText);
}

function checkNumber(){
    var stringID = document.getElementById('check-id').value;

    initAlert();

    var x = 0, y = 0, z= 0;

    for (let i = 0; i < 10; i+=2) {
        x += parseInt(stringID[i]);
    }
    for (let i = 1; i < 9; i+=2) {
        y += parseInt(stringID[i]);
    }

    tenthDigit = (x * 7 - y) % 10;

    for (let i=0; i<9; i+=1){
        z += parseInt(stringID[i]);
    }
    z += tenthDigit; 
    eleventhDigit = z % 10;

    if(stringID[9] == tenthDigit && stringID[10] == eleventhDigit){
        success.classList.remove('d-none');
    }
    else if(!(stringID.length == 11)){
        notEnoughDigit.classList.remove('d-none');
    }
    else{
        fail.classList.remove('d-none');
    }
}

function initAlert(){
    success.classList.add('d-none');
    notEnoughDigit.classList.add('d-none');
    fail.classList.add('d-none');
}
