'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Vaga extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|max:50',
      salario: 'max:8.2',
      turno: 'required|max:11',
      carga_horaria: 'max:45',
      cargo_id: 'integer|required',
      empresa_id: 'integer|required',
      teste_seletivo_id: 'integer|required'
    }
  }
}

module.exports = Vaga
