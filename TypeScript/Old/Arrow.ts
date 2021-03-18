(function() {    

    const test = function ( a:string ) {
        return a.toUpperCase();        
    }

    const test2 = (a:string) => a.toUpperCase();

    const sum = ( a:number, b:number ) => a+b;

    const test3 = {
        name : 'Test',
        Talk() {
            setTimeout(() => {
                console.log(`${ this.name } talk!`);
            }, 6000);
        }
    }

    test3.Talk();

})();
