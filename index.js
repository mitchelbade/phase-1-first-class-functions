function receivesAFunction(callBack) {
    callBack();
}

receivesAFunction();

function returnsANamedFunction() {
    const name = function() {

    }
    return name;
}

returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function () {
        console.log('This be an anonymous function.')
    }
}

returnsAnAnonymousFunction();