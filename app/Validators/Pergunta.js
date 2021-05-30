'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Pergunta extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'max:30',
      tipo: 'max:30',
      descricao: 'required|max:600',
      gabarito: 'required|max:1',
      departamento_id: 'integer'
    }
  }
}

module.exports = Pergunta
