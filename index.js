function receivesAFunction(callback) {
     callback()
}

function returnsANamedFunction() {
    function innerFunction() {
        // This is the named function
    }
    return innerFunction
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}