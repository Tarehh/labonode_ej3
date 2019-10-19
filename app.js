const argv = require('./conf/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



let comando = argv._[0]

switch (comando) {

    case 'listar':
        console.log(`Listar:\n`);
        listarTabla(argv.base, argv.limite)
            .then()
            .catch(err => console.log(err));
        break


    case 'crear':
        console.log(`Crear:\n`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break

    default:
        console.log('no se reconoce el comando');
}

//let base = 'abc';
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv.base);