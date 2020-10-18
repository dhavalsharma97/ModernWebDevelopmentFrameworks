/*eslint-env browser*/

//STEP 1
function button1_click() {
    "use strict";
    window.alert("I have been clicked");
}


//STEP 2
var btn2 = document.getElementById("btn2");
btn2.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
}


//STEP 3
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", btn3_click);
function btn3_click() {
    "use strict";
    alert("I have been clicked");
}


//STEP 4
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});


//STEP 5
window.addEventListener("load", init, false);
function init() {
    "use strict";
    var btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", function () {
        "use strict";
        window.alert("I have been clicked");
    });
}