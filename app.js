// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break
    case 'listar':
        let listado = porHacer.getListado()

        for (let tarea of listado) {
            console.log('====Por Hacer====='.green)
            console.log(tarea.descripcion)
            console.log('Estado: ', tarea.completado)
            console.log('=================='.green)
        }
        break
    case 'actualizar':
        let esActualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(esActualizado)
        break
    case 'borrar':
        let esBorrado = porHacer.borrar(argv.descripcion)
        console.log(esBorrado)
        break
    default:
        console.log('Comando no es reconocido')

}