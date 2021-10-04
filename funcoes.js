const cachorros = require('./database/cachorros.json');

module.exports = {
    listar: function(){
        console.table(cachorros)
    },
    descrever: function(pos){
        if(pos >= cachorros.length || pos < 0){
            console.error("Cachorro inexistente!");
            return;
        }
        let c = cachorros[pos];
        console.log(`Nome: ${c.nome}`)
        console.log(`Peso: ${c.peso}`)
        if(c.castrado){
            console.log("Castrado: sim")
        }else{
            console.log("Castrado: não")
        }
        console.log(`DataDeNascimento: ${c.dataDeNascimento}`)
        console.log(`Sexo: ${c.sexo}`)
        console.log("Vacinas:")
        console.table(c.vacinas)
        console.log("Serviços:")
        console.table(c.servicos)
    },
    adicionar: function($nome, $sexo, $castrado, $dataDeNascimento, $peso){
        //objeto cachorro
        //adicionar o cachorro criado a array de cachorros 
        //gravar array de cachorros no arquivo cachorros.json
        let dog = {
            nome: $nome,
            sexo: $sexo,
            castrado: $castrado,
            dataDeNascimento: $dataDeNascimento,
            peso: $peso,
            vacinas: [],
            servicos: []
        }
        cachorros.push(dog)

        fs.writeFileSync("./database/cachorros.json", JSON.stringify(cachorros))

    }

}
