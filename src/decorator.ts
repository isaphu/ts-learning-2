function Logger(constructor: Function) {
    console.log('Loggin...')
    console.log(constructor)
}

//@ is a pointer to the function
@Logger
class Person {
    name = 'Isa';

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person();

console.log(pers);