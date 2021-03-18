"use strict";
(function () {
    /* class Person {
        name: string;
        last_name: string;
        age?: number;

        talk?: boolean;

        constructor( name:string, last_name: string){
            this.name=name;
            this.last_name=last_name;
        }
    } */
    var Person = /** @class */ (function () {
        function Person(name, last_name, age, talk) {
            this.name = name;
            this.last_name = last_name;
            this.age = age;
            this.talk = talk;
        }
        return Person;
    }());
    var pepito = new Person('Pepito', 'Perez');
    console.log(pepito);
    pepito.age = 29;
    console.log(pepito);
})();
