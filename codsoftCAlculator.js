let currentOutput = '';

function clearOutput() {
    currentOutput = '';
    document.getElementById('output').textContent = '0';
}

function appendToOutput(value) {
    if (currentOutput === '0' && value !== '.') {
        currentOutput = value;
    } else {
        currentOutput += value;
    }
    document.getElementById('output').textContent = currentOutput;
}

function calculate() {
    try {
        currentOutput = eval(currentOutput);
        document.getElementById('output').textContent = currentOutput;
    } catch (error) {
        currentOutput = 'Error';
        document.getElementById('output').textContent = currentOutput;
    }
}

// Add keyboard event listeners
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key.match(/[0-9.+\-*/]|Enter|Escape/)) {
        event.preventDefault(); // Prevent the default behavior of keys like Enter and Escape
        if (key === 'Enter') {
            calculate();
        } else if (key === 'Escape') {
            clearOutput();
        } else {
            appendToOutput(key);
        }
    }
});
