'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Departamento extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:50|min:2',
      sigla: 'max:20|min:2',
      ramal: 'integer'
    }
  }
}

module.exports = Departamento
