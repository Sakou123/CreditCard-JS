// Credit Card

let input_number = document.getElementById('card_number')
let input_owner = document.getElementById('card_owner')
let input_date = document.getElementById('date')
let input_crypt = document.getElementById('crypt')
let img_number = document.getElementById('card_code')
let img_name = document.getElementById('card_name')
let img_date = document.getElementById('card_date')
let img_cvc = document.getElementById('card_cvc')

input_number.onkeypress = input_number.onkeyup = function() {
    img_number.innerHTML = this.value;
    if (input_number.value == ''){
        img_number.innerHTML = '• • • • &nbsp; • • • • &nbsp; • • • • &nbsp; • • • •';
    }
    if (input_number.value.length % 5 === 4 && input_number.value.length<15) {              /* Même "bug" qu'au slash de la date, trouve pas comment*/
        input_number.value += " ";
    }
}
input_owner.onkeypress = input_owner.onkeyup = function() {
    img_name.innerHTML = "<h3>"+this.value+"</h3>";
    if (input_owner.value == ''){
        img_name.innerHTML = '<h3>FULL NAME</h3>';
    }
}
input_date.onkeypress = input_date.onkeyup = function() {
    img_date.innerHTML = this.value;
    if (input_date.value == ''){
        img_date.innerHTML = 'MM/YY';
    } else if (input_date.value.length == 2) {
        input_date.value += "/";
    // } else if (input_date.value.length == 4 && this.which == 8) {                                  /* Marche pas?*/
    //         input_date.value.innerHTML = input_date.substr(0,input_date.length-1);
    // }
    }
}

input_crypt.onkeypress = input_crypt.onkeyup = function() {
    img_cvc.innerHTML = this.value;
    if (crypt.value == ''){
        img_cvc.innerHTML = '123';
    }
}

input_crypt.onfocus = () => {
    document.getElementById('flip').style.transform = "rotateY(180deg)";
}

input_crypt.onblur = () => {
    document.getElementById('flip').style.transform = "rotateY(0deg)";
}


/* Gestion lettres/chiffres dans les inputs de nom/code */

function NoDigits(event) {
    if (event.which >= 48 && event.which <= 57){
        event.preventDefault();
    }
}

function NoNonDigits(event) {
    if (event.which < 48 || event.which > 57){
        event.preventDefault();
    }
}

input_owner.addEventListener('keypress', NoDigits, false);  
input_crypt.addEventListener('keypress', NoNonDigits, false);
input_date.addEventListener('keypress', NoNonDigits, false);
input_number.addEventListener('keypress', NoNonDigits, false);

/* Code de la carte */
