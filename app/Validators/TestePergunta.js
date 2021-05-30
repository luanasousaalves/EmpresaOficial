'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class TestePergunta extends ValidatorAbstract {
  get rules () {
    return {
      pergunta_id: 'required|integer',
      teste_seletivos_id: 'required|integer',
      candidato_id: 'required|integer',
      resposta: 'max:1'
    }
  }
}

module.exports = TestePergunta
