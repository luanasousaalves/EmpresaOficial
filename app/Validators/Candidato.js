'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Candidato extends ValidatorAbstract  {
  get rules () {
    return {
      nome: 'required|max:50|min:2',
      cpf: 'required|integer',
      email: 'required|max:100',
      telefone: 'max:100',
      carteira_trabalho: 'max:7|integer'
    }
  }
}

module.exports = Candidato
