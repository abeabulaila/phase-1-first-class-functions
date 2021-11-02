
function receivesAFunction(spy)  {
    return spy();
}

spy(spy());

function fn(){
    return "I am functioning"
}

function returnsANamedFunction() {
    return function fn() {

    }
}

function returnsAnAnonymousFunction() {
    return function (){
        
    }
}