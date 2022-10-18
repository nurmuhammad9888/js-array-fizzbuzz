var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elFizz = document.querySelector(".text-fizz");
var elBuzz = document.querySelector(".text-buzz");
var elFizzBuzz = document.querySelector(".text-fizzbuzz");
var elAlertText = document.querySelector(".text-alert");

var fizz = [];
var buzz= [];
var fizzbuzz = [];

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();
    var elInputValue = elInput.value;
    
    if(elInputValue % 3 == 0 && elInputValue % 5 == 0){
        elInput.value = "";
        fizzbuzz.unshift(elInputValue);
        elFizzBuzz.textContent = fizzbuzz.join(", ");
        fizz.unshift(elInputValue);
        elFizz.textContent = fizz.join(", ");
        buzz.unshift(elInputValue);
        elBuzz.textContent = buzz.join(", ");
        elAlertText.classList.add("d-none");
    }else if (elInputValue % 3 == 0){
        elInput.value = "";
        fizz.unshift(elInputValue);
        elFizz.textContent = fizz.join(", ");
        elAlertText.classList.add("d-none");
    }else if (elInputValue % 5 == 0){
        elInput.value = "";
        buzz.unshift(elInputValue);
        elBuzz.textContent = buzz.join(", ");
        elAlertText.classList.add("d-none");

    }else{
        elInput.value = "";
        elAlertText.classList.add("d-block");
        elAlertText.classList.remove("d-none");
        elAlertText.textContent = ` ${elInputValue} 3 ga ham 5 ga ham bo'linmaydi .`
    }
    
})