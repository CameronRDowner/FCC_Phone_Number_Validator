function phoneNumberValidator(numberToValidate) {
    let phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return phoneRegex.test(numberToValidate);
}

phoneNumberValidator("555-555-5555");