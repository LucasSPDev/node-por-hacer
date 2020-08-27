const fs = require('fs')

let listadoPorHcer = []

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHcer)

    fs.writeFile('db/data.json', data, (err) => {

        if (err)
            throw new Error('No se pudo grabar', err)


    });

}


const cargarDB = () => {
    try {
        listadoPorHcer = require('../db/data.json')
    } catch (error) {
        listadoPorHcer = []
    }
}

const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHcer.push(porHacer)

    guardarDB()

    return porHacer

}


const getListado = () => {
    cargarDB()
    return listadoPorHcer
}

const actualizar = (descripcion, completado = true) => {

    cargarDB()

    let index = listadoPorHcer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHcer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }

}
const borrar = (descripcion) => {

    cargarDB()
    let nuevaLista = listadoPorHcer.filter(tarea => tarea.descripcion !== descripcion)

    if (nuevaLista.length === listadoPorHcer.length) {
        return false
    } else {
        listadoPorHcer = nuevaLista
        guardarDB()
        return true

    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}