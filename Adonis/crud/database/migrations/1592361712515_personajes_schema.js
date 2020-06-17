'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonajesSchema extends Schema {
  up () {
    this.create('personajes', (table) => {
      table.increments()
      table.string('nombre', 80).notNullable()
      table.string('raza', 80).notNullable()
      table.string('clase', 80).notNullable()
      
      table.timestamps()
    })
  }

  down () {
    this.drop('personajes')
  }
}

module.exports = PersonajesSchema
