
var result = document.getElementById("result");
var history = document.getElementById("history");

var expression = "";
var justCalculated = false;

function updateDisplay() {
    result.value = expression || "0";
}

function calculate() {
    if (expression === "") {
        return;
    }

    try {
        var answer = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(answer)) {
            history.innerText = "Invalid calculation";
            return;
        }

        history.innerText = expression.replace(/\*/g, "×").replace(/\//g, "÷") + " =";

        expression = String(Number(answer.toFixed(10)));
        updateDisplay();
        justCalculated = true;

    } catch (error) {
        history.innerText = "Invalid expression";
    }
}

function addValue(value) {

    var operators = ["+", "-", "*", "/"];

    if (justCalculated) {
        if (!operators.includes(value)) {
            expression = "";
        }
        justCalculated = false;
    }

    if (operators.includes(value)) {

        if (expression === "" && value !== "-") {
            return;
        }

        var last = expression.slice(-1);

        if (operators.includes(last)) {
            expression = expression.slice(0, -1);
        }

        expression += value;

    } else if (value === ".") {

        var parts = expression.split(/[+\-*/]/);
        var lastNumber = parts[parts.length - 1];

        if (lastNumber.includes(".")) {
            return;
        }

        expression += lastNumber === "" ? "0." : ".";

    } else {
        expression += value;
    }

    updateDisplay();
}

document.querySelectorAll("[data-value]").forEach(function(button) {

    button.addEventListener("click", function() {
        addValue(button.getAttribute("data-value"));
    });

});

document.querySelectorAll("[data-action]").forEach(function(button) {

    button.addEventListener("click", function() {

        var action = button.getAttribute("data-action");

        if (action === "clear") {
            expression = "";
            history.innerText = "Your calculation";
            justCalculated = false;
            updateDisplay();
        }

        if (action === "delete") {
            expression = expression.slice(0, -1);
            justCalculated = false;
            updateDisplay();
        }

        if (action === "calculate") {
            calculate();
        }

        if (action === "percent") {
            var answer = Function('"use strict"; return (' + expression + ')')();

            if (Number.isFinite(answer)) {
                expression = String(answer / 100);
                updateDisplay();
            }
        }

        if (action === "sign") {
            if (expression !== "") {
                expression = String(-Number(expression));
                updateDisplay();
            }
        }

    });

});

// Keyboard support
document.addEventListener("keydown", function(event) {

    if (event.key >= "0" && event.key <= "9") {
        addValue(event.key);
    }

    if (["+", "-", "*", "/", "."].includes(event.key)) {
        addValue(event.key);
    }

    if (event.key === "Enter" || event.key === "=") {
        calculate();
    }

    if (event.key === "Backspace") {
        expression = expression.slice(0, -1);
        updateDisplay();
    }

    if (event.key === "Escape") {
        expression = "";
        history.innerText = "Your calculation";
        updateDisplay();
    }

});
