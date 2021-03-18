(function() {    
    function saludar(who:string, date ?: string, partner: string ='his mom') {

        if ( date ) 
        {
            console.log(`${ who } arrived on ${ date } with ${partner}`);
        } else
        {
            console.log(`${ who } arrived`);
        }
        
    }

    saludar('Pepito', 'Monday', 'his dad');
})();
