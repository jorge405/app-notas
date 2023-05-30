import {Router} from 'express'
import {VerNotas,postNotas,patchNotas,deleteNotas} from '../controllers/controllerNotas.js'
const routerNotas=Router()

routerNotas.get('/VerNotas',VerNotas)
routerNotas.post('/postNotas',postNotas)
routerNotas.patch('/patchNotas',patchNotas)
routerNotas.delete('/deleteNotas',deleteNotas)



export default routerNotas