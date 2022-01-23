
const fs= require('fs');
const colors= require('colors');
const crearArchivo = async(base, l=false,h) =>{

  try{
    let salida = '';
    let consola = '';
    for (let i = 1; i<=h; i++){
        salida += (`${base} x ${i} = ${base*i}\n`);
        consola += (`${base} ${'x'.blue} ${i} = ${base*i}\n`);
    }

    if(l){
      console.log('========================')
      console.log('Tabla del: ',colors.bgRed(base))
      console.log('========================')
      console.log(consola)
    }
  
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);


return `tabla-${base}.txt`;

  }catch(err){
  throw err;
  }
        
}

module.exports = {crearArchivo}
