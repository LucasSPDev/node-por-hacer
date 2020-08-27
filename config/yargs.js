const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Crear una tarea por hacer', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra una tarea de la lista de "por hacer"', {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}