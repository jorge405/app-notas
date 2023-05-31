import {pool} from '../db.js'

export const VerNotas= async(req,res)=>{
    try {
        const [rows]= await pool.query ('SELECT * FROM notas')
        res.json(
            rows
        )
    } catch (error) {
        return res.status(500).json({
            message:"notas not found"
        })
    }
    
}

export const VerOneNota=async(req,res)=>{
    const id=req.params.id
    try {
        const [rows]=await pool.query('SELECT * FROM notas WHERE id_notas= ?',[id])
        if (rows.length<=0) return res.status(404).json({
            message:'nota no encontrada'
        })
        res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message:"algo salio mal"
        })
    }
}


export const postNotas= async(req,res)=>{
    const {titulo,descripcion,fecha_creacion,estado}=req.body
    try {
     const [rows]=await pool.query('INSERT INTO notas (titulo,descripcion,fecha_creacion,estado) VALUES (?,?,?,?)',[titulo,descripcion,fecha_creacion,estado])   
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:"algio salio mal"
        })
    }
}

export const patchNotas=(req,res)=>{
    res.send('modificando notas del servidor')
}

export const deleteNotas=()=>{
    res.send('eliminando notas del servidor')
}


