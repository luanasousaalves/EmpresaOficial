'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Cargo extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:50|min:2',
      departamento_id: 'required|integer'
    }
  }
}

module.exports = Cargo
