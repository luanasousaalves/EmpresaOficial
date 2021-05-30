'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TestePergunta extends Model {
    static getCampoTestePergunta(){
            return [
            'pergunta_id',
            'teste_seletivos_id',
            'candidato_id',
            'resposta' 
        ]
    }   
    candidato(){
        return this.belongsTo('App/models/Candidato')
    }
    teste_seletivo(){
        return this.belongsTo('App/models/TesteSeletivo')
    }
    pergunta(){
        return this.belongsTo('App/models/Pergunta')
    }
}

module.exports = TestePergunta
