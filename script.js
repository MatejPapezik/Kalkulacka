let element = document.getElementById("calculator_display");

function adjustFont() {
    if (element.innerHTML.length > 14){
        element.style.fontSize = "40px";
    }

    else if(element.innerHTML.length > 10){
        element.style.fontSize = "70px";
    }
    
    else {
        element.style.fontSize = "100px";
    }
}

function Button_clear() {
    element.innerHTML = "";
    adjustFont()
}

function Button_back() {
    if (element.innerHTML === "Error") {
        element.innerHTML = "";
    } else {
        element.innerHTML = element.innerHTML.slice(0, -1);
    }
    adjustFont();
}

function Button_7() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += 7;
    adjustFont()
}

function Button_8() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += 8;
    adjustFont()
}

function Button_9() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += 9;
    adjustFont()
}

function Button_multiply() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += "*";
    adjustFont()
}

function Button_4() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += 4;
    adjustFont()
}

function Button_5() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += 5;
    adjustFont()
}

function Button_6() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += 6;
    adjustFont()
}

function Button_minus() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += "-";
    adjustFont()
}

function Button_1() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += 1;
    adjustFont()
}

function Button_2() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += 2;
    adjustFont()
}

function Button_3() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += 3;
    adjustFont()
}

function Button_plus() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += "+";
    adjustFont()
}

function Button_comma() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += ".";
    adjustFont()
}

function Button_0() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += "0";
    adjustFont()
}

function Button_equals() {
    try {
        result = eval(element.innerHTML);
        if (isNaN(result) || result === undefined || !isFinite(result)) {
            element.innerHTML = "Error";
        } else {
            element.innerHTML = result;
        }
    } catch {
        element.innerHTML = "Error";
    }
}

function Button_devide() {
    if (element.innerHTML.length >= 25) return;
    element.innerHTML += "/";
    adjustFont()
}