
import {PORT} from './config.js'
import app from './app.js'


// escuchando puerto

app.listen(PORT)
console.log('aplicacion corriendo en el puerto '+PORT)