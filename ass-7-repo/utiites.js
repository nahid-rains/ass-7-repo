

function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextValueById(element){
    const elementField = document.getElementById(element);
    const elementFieldString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldString);
    return elementFieldValue;
}
function setTextElementValueById(elementPro, newValue){
    // line no 12 and 19 are same ,to make an unique Id ,i make it different.
    const setElementField = document.getElementById(elementPro);
    setElementField.innerText = newValue;
}


