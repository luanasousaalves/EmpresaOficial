'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Empresa extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:50',
      cnpj: 'required|integer|max:14',
      telefone: 'integer',
      email: 'email'
    }
  }
}

module.exports = Empresa
