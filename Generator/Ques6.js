// 6. Create a generator that can throw an exception.


function *generator() {
    throw new Error('Error');
}

let it = generator();
it.next();