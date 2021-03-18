(function() {    

    interface Person {
        name: string;
        last_name: string;
        age?: number; 
    }
    
    const talk = ( person:Person ) => {
        console.log(`${ person.name } is talking`);
    }

    const watch = ( person:Person ) => {
        console.log(`${ person.name } ${ person.last_name } is watching TV`);
    }

    const pepito:Person = {
        name: 'Pepito',
        last_name: 'Perez'
    }

    talk( pepito );
    watch( pepito );

})();
