//function to reverse password
function checkReverse(password) {
    var splitString = password.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

//function to store password to a user object
function storePassword(name, password, input) {

    let newPass
    if (validatePassword(password, input) === true) {
        newPass = checkReverse(password)
    } else {
        newPass = password
    }
    const user = {
        name: name,
        password: password,
        newpassword: newPass
    }

    return {
        name: user.name,
        newpassword: user.newpassword
    }
}

//function to validate password
function validatePassword(password, input) {

    var errors = []

    if (password.search(/[a-z]/) < 0) {
        errors.push("Your password must contain at least one lowercase letter.")
    }
    if (password.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one uppercase letter.")
    }
    if (password.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.")
    }

    if (password === input && input.length > 7 && errors.length === 0) {
        return true;
    } else {
        return false;
    }
}


//test run
console.log(validatePassword("helloworld", "hello"))
console.log(validatePassword("hello", "hello"))
console.log(validatePassword("hello1234", "hello1234"))
console.log(validatePassword("Hello1234", "Hello1234"))
console.log(validatePassword("HELLO1234", "HELLO1234"))

console.log(storePassword("John", "Pass1234", "Pass1234"))
console.log(storePassword("John", "Pass123", "Pass12345"))