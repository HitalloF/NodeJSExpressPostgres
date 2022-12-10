const pg = require('../../pg')


module.exports ={


    // Listar todos os Clientes
    get : (req,res) =>{
        pg.query("select * from animal",(err, result)=>{
            if(!err){
                res.send(result.rows)
            }
        })
        pg.end;
    },
    getId : (req, res)=>{
        const id = req.id
        pg.query(`select * from animal where id=${req.params.id}`,(err, result)=>{
            if(!err){
                res.status(200).send(result.rows)
            }else{console.log(err)}
        })
        pg.end;
    },
    post : (req,res)=>{
        const animal = req.body;
        let insertQuery = `INSERT INTO animal(
            id, nome, idade, alergias, descricao, cliente_id, conta)
            VALUES ( ${animal.id}, '${animal.nome}', ${animal.idade}, '${animal.alergias}', '${animal.descricao}', ${animal.cliente_id}, ${animal.conta});`
            pg.query(insertQuery, (err,result)=>{
                if(!err){
                    res.status(200).send(result.rows)
                }else(err)
            })
            pg.end;
    },
    put : (req,res)=>{
        const id = req.id;
        let animal = req.body

        let updateQuery = `update animal
        set nome='${animal.nome}',idade=${animal.idade},alergias='${animal.alergias}', descricao='${animal.alergias}',cliente_id=${animal.cliente_id},conta=${animal.conta} 
        where id=${animal.id}`

        pg.query(updateQuery, (err,result)=>{
            if(!err){
                res.status(200).send(result.rows)
            }else{console.log(err)}
          })
          pg.end;
    },

    delete : (req,res)=>{
        const id = req.id
        let deleteQuery = `delete from animal where id =${req.params.id}`
        pg.query(deleteQuery, (err,result)=>{
            if(!err){
                res.status(200).send(result.send)
            }else(err)
        })
        
        pg.end;
    }
}