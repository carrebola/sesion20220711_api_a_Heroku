//index

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

dotenv.config()
app.use(cors())


const nombre = process.env.NOMBRE || 'Anónimo'

app.get('/' , (req,res)=>{
    res.status(200).json({
        error:false,
        mensaje: 'Estás en la api de ' + nombre ,
        puerto: process.env.PORT
    })
})

app.get('/api' , (req,res)=>{
    res.status(200).json({
        error: false,
        mensaje: 'Datos de usuarios',
        datos: [
            {
                nombre: 'paco',
                apellido: 'perro'
            },
            {
                nombre: 'manolo',
                apellido: 'sanchez'
            },
            {
                nombre: 'Eva',
                apellido: 'Calao'
            }
        ]
    
    })
   
})


puerto = process.env.PORT || 8000
app.listen(puerto, ()=>{
    console.log('Servidor escuchando en puerto ' + puerto + ' del ordenador de ' + nombre);
})