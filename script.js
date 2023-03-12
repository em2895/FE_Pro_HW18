let num = Number(prompt("Введіть будь-яке число: "));
let degree = Number(prompt("Введіть ступінь, в який хочете звести: "));


function pow (num, degree) {
    
    if (degree != 1){
        return num * pow (num, degree - 1);
    }
    else{
        return num;
    }
}

alert("Число " + num + " в " + degree + " ступені дорівнює " + pow(num, degree));