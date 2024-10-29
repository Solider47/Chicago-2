let value = 0;

function changeValue(amount) {
    value += amount;
    document.getElementById("value").textContent = value;
}

function resetValue() {
    value = 0;
    document.getElementById("value").textContent = value;
}
