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
        res.json(rows) // cambio pendiente en esta linea
    } catch (error) {
        return res.status(500).json({
            message:"algio salio mal"
        })
    }
}

export const patchNotas=async(req,res)=>{
    const id=req.params.id
    const {titulo,descripcion,fecha_creacion,estado}=req.body
    try {
        const [rows]=await pool.query('UPDATE notas SET titulo = IFNULL(?,titulo), descripcion = IFNULL(?,descripcion), fecha_creacion = IFNULL(?,fecha_creacion), estado = IFNULL(?,estado) WHERE id_notas= ?',[titulo,descripcion,fecha_creacion,estado,id])
        if (rows.affectedRows===0) return res.status(404).json({
        message:"nota no modificada hubo un problema"
    })
    res.json({
        message:"nota modificada correctamente"
    })
    } catch (error) {
        return res.status(500).json({
            message:"algo salio mal"
        })
    }

}

export const deleteNotas= async()=>{
    const id=req.params.id
    try {
        const [rows]=await pool.query('DELETE FROM notas WHERE id_notas= ?',[id])
        if (rows.affectedRows<=0) return res.status(404).json({
            message:"nota no encontrada no eliminada"
        })
        res.status(200).json({
            message:"nota eliminada"
        })
    } catch (error) {
        return res.status(500).json({
            message:"algo salio mal"
        })
    }
}


