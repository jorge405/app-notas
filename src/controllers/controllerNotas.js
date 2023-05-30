import {pool} from '../db.js'

export const VerNotas=(req,res)=>{
    res.send('viendo notas')
}


export const postNotas=(req,res)=>{
    res.json({
        message:"mandando datos del servidor"
    })
}

export const patchNotas=(req,res)=>{
    res.send('modificando notas del servidor')
}

export const deleteNotas=()=>{
    res.send('eliminando notas del servidor')
}


