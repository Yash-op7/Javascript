var x = 'global variable';

function outer() {
    function inner() {
        console.log(x);
    }
    inner()
}

outer();