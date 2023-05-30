import {pool} from '../db.js'

export const VerNotas= async(req,res)=>{
    const [rows]= await pool.query ('SELECT * FROM railway')
    console.log(rows)
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


