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

    if(stringID.length > 11){
        generateNumber();
    }
    else{
        numberText.innerText = stringID;
    }
}

function copyNumber(){
    var numberText = document.getElementById('id-number');
    navigator.clipboard.writeText(numberText.innerText);
}