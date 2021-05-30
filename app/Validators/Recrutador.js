'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Recrutador extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|max:50|min:2',
      cpf: 'required|integer',
      email: 'email|max:100',
      telefone: 'max:15',
      empresa_id: 'integer'
    }
  }
}

module.exports = Recrutador
