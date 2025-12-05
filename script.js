function addToHistory(expression, result) {
    const historyList = document.getElementById("history-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${expression} = ${result}`;
    historyList.prepend(listItem); // tambah ke paling atas
}
function appendValue(value){
    document.getElementById("display").value += value;
}
function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        let expression = display.value;
        let result = eval(expression);

        addToHistory(expression, result);

        display.value = result;
    } catch {
        display.value = "Error";
    }
}
