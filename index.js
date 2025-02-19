function checkReverse(password) {
    var splitString = password.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

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

function validatePassword(password, input) {

    let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$")

    if (password === input && input.length > 7 && pattern.test(input)) {
        return true;
    } else {
        return false;
    }

    // if(inputlen!=pwlen){
    //     return false;
    // }
}

console.log(validatePassword("helloworld", "hello"))
console.log(validatePassword("hello", "hello"))
console.log(validatePassword("hello1234", "hello1234"))
console.log(validatePassword("Hello1234", "Hello1234"))
console.log(validatePassword("HELLO1234", "HELLO1234"))

console.log(storePassword("John", "Pass1234", "Pass1234"))
console.log(storePassword("John", "Pass123", "Pass12345"))