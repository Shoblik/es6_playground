import $ from 'jquery';

class Person {
    constructor(name){
        this.name = name;
    }
    sayHello() {
        return `Hello, my name is ${this.name}`
    }
    sayGoodbye() {
        return `It's time for me to dip`;
    }
}

class SuperPerson extends Person {
    constructor(name, age){
        super(name);
        this.age = age;
    }

    superSayHi(){
        return `Hi I'm ${this.name}, how the fuck are you? I'm ${this.age}, how old are you?`;
    }

    sayHello() {
        const container = $('<h1>', {
            text: super.sayHello()
        });

        $('#root').append(container);
        return super.sayHello();
    }
}

export default SuperPerson;