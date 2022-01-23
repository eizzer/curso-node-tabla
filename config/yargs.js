const  argv  = require('yargs').option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
    
    }).check((argv,options) =>{
     if (isNaN(argv.base)){
         throw 'ERROR, la base debe ser un numero'
     }
     return true;
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption:false,
        default: false,
        describe: 'Muestra la tabla en consola'
        
        
        }).check((argv,options) =>{
         if (isNaN(argv.base)){
             throw 'ERROR, la base debe ser un numero'
         }
         return true;
        }).option('h', {
            alias: 'hasta',
            type: 'number',
            demandOption:true,
            default: 10,
            describe: 'Indica hasta cuando voy a multiplicar un valor, largo de la lista'
            
            
            }).check((argv,options) =>{
             if (isNaN(argv.base)){
                 throw 'ERROR, la base debe ser un numero'
             }
             return true;
            }).argv; 

        module.exports = argv