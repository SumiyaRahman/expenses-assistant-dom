let count = 0;
const calculateButton = document.getElementById("calculate");

// add event listener for calculate button
calculateButton.addEventListener("click", function () {
  count += 1; 

// get value from function
const income = getInputValue("income");
const software = getInputValue("software");
const courses = getInputValue("courses");
const internet = getInputValue("internet");

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  if(totalExpenses > income){
    showError("logic-error");
    return;
  }

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const results = document.getElementById("results");
  results.classList.remove("hidden");

//   history
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";

  historyItem.innerHTML = `
   <p class = "text-xs text-gray-500">Serial: ${count}</p>
  <p class = "text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
  <p class = "text-xs text-gray-500">Income: ৳${income.toFixed(2)}</p>
  <p class = "text-xs text-gray-500">Expenses: ৳${totalExpenses.toFixed(2)}</p>
  <p class = "text-xs text-gray-500">Balance: ৳${balance.toFixed(2)}</p>
  `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// add event listener for savings button
const calculateSavings = document.getElementById("calculate-savings");
calculateSavings.addEventListener("click", function () {
  const savingpercentage = parseFloat(document.getElementById("savings").value);

  // get value from function
const income = getInputValue("income");
const software = getInputValue("software");
const courses = getInputValue("courses");
const internet = getInputValue("internet");

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const savingAmount = (savingpercentage * balance) / 100;

  const remainingBalance = balance - savingAmount;

  const savingsAmountElement = document.getElementById("savings-amount");
  savingsAmountElement.innerText = savingAmount.toFixed(2);

  const remainingBalanceElement = document.getElementById("remaining-balance");
  remainingBalanceElement.innerText = remainingBalance.toFixed(2);
});

// history tab functionalities

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
const expenseForm = document.getElementById("expense-form");

const results = document.getElementById("results");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove("text-gray-600"); 
  
  expenseForm.classList.add("hidden");

  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
    );
  assistantTab.classList.add("text-gray-600");

  document.getElementById("history-section").classList.remove("hidden");
});

// assistant tab functionalities
assistantTab.addEventListener('click', function(){
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
        );
        assistantTab.classList.remove("text-gray-600");

        expenseForm.classList.remove("hidden");
        results.classList.add("hidden");

        historyTab.classList.remove(
            "text-white",
            "bg-gradient-to-r",
            "from-blue-500",
            "to-purple-600"
          );
        historyTab.classList.add("text-gray-600"); 
        document.getElementById("history-section").classList.add("hidden");
});

// live validation for input

// income
document.getElementById("income").addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById("income").value);

    if(isNaN(inputValue) || inputValue <= 0){
        showError("income-error");
        // document.getElementById("income-error").classList.remove("hidden");
        return;
    }
});

// software
document.getElementById("software").addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById("software").value);

    if(isNaN(inputValue) || inputValue <= 0){
        showError("software-error");
        // document.getElementById("software-error").classList.remove("hidden");
        return;
    }
});

// courses
document.getElementById("courses").addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById("courses").value);

    if(isNaN(inputValue) || inputValue <= 0){
        showError("courses-error");
        // document.getElementById("courses-error").classList.remove("hidden");
        return;
    }
});

// internet
document.getElementById("internet").addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById("internet").value);

    if(isNaN(inputValue) || inputValue <= 0){
        showError("internet-error");
        // document.getElementById("internet-error").classList.remove("hidden");
        return;
    }
});

// savings
document.getElementById("savings").addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById("savings").value);

    if(isNaN(inputValue) || inputValue <= 0){
        showError("savings-error");
        // document.getElementById("internet-error").classList.remove("hidden");
        return;
    }
});