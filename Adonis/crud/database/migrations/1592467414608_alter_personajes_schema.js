'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterPersonajesSchema extends Schema {
  up () {
  
    this.raw("ALTER TABLE personajes ADD COLUMN editMode BOOLEAN DEFAULT FALSE;")
  }

  down () {
    this.table('alter_personajes', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterPersonajesSchema
