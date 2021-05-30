'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class OpcaoPergunta extends ValidatorAbstract {
  get rules () {
    return {
      descricao: 'required|max:600',
      valor: 'min:1|max:1',
      pergunta_id: 'integer'
    }
  }
}

module.exports = OpcaoPergunta
