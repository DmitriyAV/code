const name = document.getElementById('inputName')
const button = document.getElementById('submitForm')
const salary = document.getElementById('inputSalary')
const birthday = document.getElementById('inputBirth')
const phone = document.getElementById('inputPhone')


const lengthName = function () {
    let lengthName = name.value
    return lengthName.length >= 2;
}

const salaryMoreOrLess = function () {
    let val = salary.value
    return (val < 10000 && val > 160000);
}

const birthIsNull = function () {
    let val = birthday.value
    return val !== undefined;
}

const phoneLong = function () {
    let val = phone.value
    return val.length > 10
}

const createElError = function (val) {

    let err = document.createElement('p')
    err.innerText = val
    err.style.display = "grid";
    err.setAttribute('id', 'error')
    document.getElementById('container').appendChild(err)

}

const validate = function () {
    if (!lengthName()) {
        createElError(`Name is less than 2 char!`)
    }
    if (!salaryMoreOrLess()) {
        createElError(`Salary is more 16k or less 10k.`)
    }
    if (birthIsNull()) {
        createElError(`Birth is empty`)

    }
    if (!phoneLong()) {
        createElError(`Phone is less that 10 sights.`)
    }
}

button.addEventListener('click', validate)