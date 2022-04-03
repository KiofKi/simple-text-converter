const input = document.getElementById("input");
const output = document.getElementById("output")

function lowercase() {
    output.innerText = input.value.toLowerCase();
    if (output.value == "") {
        output.disabled = true;
    } else {
        output.disabled = false;
    };
};

function uppercase() {
    output.innerText = input.value.toUpperCase();
    if (output.value == "") {
        output.disabled = true;
    } else {
        output.disabled = false;
    };
};

function capitalize() {
    const arr = input.value.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().slice(1);
    }
    output.innerText = arr.join(" ");
    if (output.value == "") {
        output.disabled = true;
    } else {
        output.disabled = false;
    };
};

function randomize() {
    const str = input.value;
    output.innerText = "";
    var arr = "";
    for (var i = 0; i<str.length; i++) {
        if (Math.floor(Math.random()*2) == 1) {
            arr += str[i].toUpperCase();
        }
        else {
            arr += str[i].toLowerCase();
        };
        output.innerText += arr;
        if (output.value == "") {
            output.disabled = true;
        } else {
            output.disabled = false;
        };
    };
};