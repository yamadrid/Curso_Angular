(function() {    
    
    console.log('Start');

    const prom1 = new Promise(( resolve, reject ) => {
        setTimeout(() => {
            reject('Timeout finished');
        }, 5000);
    });

    const money = ( mount: number ): Promise<number> => {
        let value = 1000;

        return new Promise( ( resolve, reject ) => {
            if ( mount > value ){
                reject('Insufficient');
            }
            value -= mount;
            resolve( value );
        })
    }

    //prom1.then( msg => console.log(msg) ).catch( err => console.warn(err) );

    money( 1500 ).then( mount => console.log(`I have ${ mount }`)).catch( console.warn );

    console.log('End');

})();
