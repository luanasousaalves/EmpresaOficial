'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class TesteSeletivo extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:30',
      teste_data: 'required'
    }
  }
}

module.exports = TesteSeletivo
