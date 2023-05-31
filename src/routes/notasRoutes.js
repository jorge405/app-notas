import {Router} from 'express'
import {VerNotas,VerOneNota,postNotas,patchNotas,deleteNotas} from '../controllers/controllerNotas.js'
const routerNotas=Router()

routerNotas.get('/VerNotas',VerNotas)
routerNotas.get('/VerOneNota/:id',VerOneNota)
routerNotas.post('/postNotas',postNotas)
routerNotas.patch('/patchNotas',patchNotas)
routerNotas.delete('/deleteNotas',deleteNotas)



export default routerNotas