import express from 'express'
import routerNotas from './routes/notasRoutes.js'
const app=express()


//use
app.use(express.json())
app.use(express.static('public'))
// rutas inciales
app.use('/api',routerNotas)

// luego de perdir todas las paginas

export default app