(function() {    
    // Hi, my name is Pepito Perez, I am 20 years old.

    function getAge() {
        return 30;        
    }

    const NAME = 'Pepito';
    const LAST_NAME = 'Perez';
    const AGE = 20;

    //const salida = 'Hi, my name is ' + NAME + ' ' + LAST_NAME + ', I am ' + AGE + ' ' + 'years old';
    const salida = `Hi, my name is ${ NAME } ${ LAST_NAME }, I am ${getAge()} years old`;

    console.log(salida);
})();
