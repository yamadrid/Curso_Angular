(function() {    

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

    class Person {
        constructor( public name:string, 
                     public last_name: string,
                     public age?: number,
                     public talk?: boolean
            ){ }
    }

    const pepito:Person = new Person('Pepito', 'Perez') ;

    console.log(pepito);

    pepito.age = 29

    console.log(pepito);

})();
