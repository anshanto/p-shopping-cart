function updatePhoneNumber(isIncrease) {
    const phoneNumberElement = document.getElementById('phone-number');
    const phoneNumberString = phoneNumberElement.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberElement.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneNumberPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneNumberPrice = document.getElementById('phone-total');
    phoneNumberPrice.innerText = phoneTotalPrice;
}

function getTextElementValueById(elementId) {
    const totalElement = document.getElementById(elementId);
    const totalElementString = totalElement.innerText;
    const currentTotal = parseInt(totalElementString);
    console.log(currentTotal)
    return currentTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function getCalculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // tax ammount
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    const tax = setTextElementValueById('tax-amount', taxAmount);

    // total amount
    const totalAmount = currentSubTotal + taxAmount;
    const total = setTextElementValueById('total-price', totalAmount);
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneNumberPrice(newPhoneNumber);
    getCalculateSubTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneNumberPrice(newPhoneNumber);
    getCalculateSubTotal();
})