import express from 'express'
import routerNotas from './routes/notasRoutes.js'
const app=express()


//use
app.use(express.json())

// rutas inciales
app.get('/',(req,res)=>{
    res.json({
        message:"bievenido a mi backend de node js"
    })
})
app.use('/api',routerNotas)

// luego de perdir todas las paginas

export default app