function reverseString() {
    const input = document.getElementById("strInput").value;
    const result = document.getElementById("reversalResult");

    if (input === "") {
        result.textContent = "Please enter a string";
        return;
    }
    let reverse = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reverse += input[i];
    }
    result.textContent = "Reversed: " + reverse;
}

document.getElementById("reverseBtn").addEventListener("click", reverseString);



function palindromeChecker() {
    const input = document.getElementById("palInput").value;
    const result = document.getElementById("palindromeResult");

    if (input === "") {
        result.textContent = "Please enter a number";
        return;
    }

    let isPal = true;
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            isPal = false;
            break;
        }
    }

    if(isPal) {
        result.textContent = "YES, " + input + " is a palindrome";
    } else {
        result.textContent = "NO, " + input + " is not a palindrome";
    }
}

document.getElementById("palindromeBtn").addEventListener("click", palindromeChecker);



function totalFinder() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercent = parseFloat(document.getElementById("tipPercent").value);
    const result = document.getElementById("totalResult");

    if (subtotal < 0 || tipPercent < 0) {
        result.textContent = "Please enter positive numbers";
        return;
    } 

    const tip = subtotal * (tipPercent / 100);
    const total = subtotal + tip;

    result.textContent = "The total with tip is $" + total.toFixed(2);  
}

document.getElementById("totalBtn").addEventListener("click", totalFinder);
