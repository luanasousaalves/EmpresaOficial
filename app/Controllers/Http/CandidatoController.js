'use strict'

const Candidato = use('App/models/Candidato')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with candidatos
 */
class CandidatoController {
  /**
   * Show a list of all candidatos.
   * GET candidatos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Candidato.query().paginate(page, perPage);
  }


  /**
   * Create/save a new candidato.
   * POST candidatos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
    const campos = Candidato.getCampoCandidato() //requisição de uma variável em outro arquivo
    const candidatos = request.only(campos) //chamando a variável em outra linha
    return await Candidato.create(candidatos)
  }

  /**
   * Display a single candidato.
   * GET candidatos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async show ({ params, request, response, view }) {
    return await Candidato.query().with('teste_perguntas').where('id', params.id).first();
  }

  /**
   * Update candidato details.
   * PUT or PATCH candidatos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const candidato = await Candidato.findOrFail(params.id)

    const campos = Candidato.getCampoCandidato()
    const dados = request.only(campos)

    candidato.merge(dados) 
    await candidato.save() 
    return candidato 
  }


  /**
   * Delete a candidato with id.
   * DELETE candidatos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const candidato = await Candidato.findOrFail(params.id)
    return await candidato.delete();
  }
}

module.exports = CandidatoController
