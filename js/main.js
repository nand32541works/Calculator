let currentExpression = "";

function digit(value) {
    currentExpression += value;
    return currentExpression;
}

function operators(operator) {
    currentExpression += ` ${operator} `;
    return currentExpression;
}

function equal() {
    try {
        // Evaluate the expression safely
        const result = eval(currentExpression.replace("x", "*"));
        currentExpression = result.toString();
        return result;
    } catch (error) {
        currentExpression = "";
        return "Error";
    }
}

function c() {
    currentExpression = "";
    return "";
}

function maths(operation) {
    try {
        const value = eval(currentExpression);
        switch (operation) {
            case "sqrt":
                return Math.sqrt(value);
            case "square":
                return Math.pow(value, 2);
            case "cube":
                return Math.pow(value, 3);
            case "logTen":
                return Math.log10(value);
            case "ln":
                return Math.log(value);
            case "sin":
                return Math.sin((value * Math.PI) / 180); // Convert degrees to radians
            case "cos":
                return Math.cos((value * Math.PI) / 180); // Convert degrees to radians
            case "tan":
                return Math.tan((value * Math.PI) / 180); // Convert degrees to radians
            case "fact":
                return factorial(value);
            default:
                return "Error";
        }
    } catch (error) {
        return "Error";
    }
}

function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function percent() {
    try {
        currentExpression = (eval(currentExpression) / 100).toString();
        return currentExpression;
    } catch (error) {
        return "Error";
    }
}

function bsp() {
    currentExpression = currentExpression.slice(0, -1);
    return currentExpression;
}

function power() {
    try {
        const [base, exponent] = currentExpression.split(" ");
        return Math.pow(parseFloat(base), parseFloat(exponent));
    } catch (error) {
        return "Error";
    }
}

function base(type) {
    try {
        const value = parseInt(currentExpression);
        switch (type) {
            case "bin":
                return value.toString(2);
            case "oct":
                return value.toString(8);
            case "hex":
                return value.toString(16).toUpperCase();
            default:
                return "Error";
        }
    } catch (error) {
        return "Error";
    }
}
