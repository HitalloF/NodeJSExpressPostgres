const pg = require('../../pg')
pg.connect();

module.exports ={


    // Listar todos os Clientes
    get : (req,res) =>{
        pg.query("select * from clientes",(err, result)=>{
            if(!err){
                res.send(result.rows)
            }
        })
        pg.end;
    },
    // Listar o Cliente por seu ID
    getId : (req,res)=>{
        const id = req.id
        pg.query(`select * from clientes where id=${req.params.id}`, (err,result)=>{
            if(!err){
                res.send(result.rows)
            }
        })
        pg.end;

    // Cadastrar Cliente

    },
    post : (req,res) =>{
        const clientes = req.body;
        let insertQuery = `insert into clientes(id,name,telefone,cpf,endereco,animal) values 
        (${clientes.id},'${clientes.name}',${clientes.telefone},${clientes.cpf},'${clientes.endereco}','${clientes.animal}')`
        pg.query(insertQuery, (err,result)=>{
            if(!err){
                res.status(201).send(result.rows)
            }
        })
        pg.end;
    },

    // Editar o Cliente
    put : (req, res) =>{
      const id = req.id
      let cliente = req.body
     
      let updateQuery = `update clientes
      set name='${cliente.name}', telefone=${cliente.telefone}, cpf=${cliente.cpf}, endereco='${cliente.endereco}', animal='${cliente.animal}'
      where id = '${cliente.id}'`



      pg.query(updateQuery, (err,result)=>{
        if(!err){
            res.status(200).send(result.rows)
        }else{console.log(err)}
      })
      pg.end;
    },


    // Deletando um cliente
    delete : (req,res)=>{
        const id = req.id
        let insertQuery = `delete from clientes where id =${req.params.id}`
        pg.query(insertQuery, (err,result)=>{
            if(!err){
                res.status(204).send(result.rows,"Deletado com sucesso")
            }else{console.log(err)}
        })
    } 

}