// get value by Id
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
};

// error message
function showError(id){
    document.getElementById(id).classList.remove("hidden");
};