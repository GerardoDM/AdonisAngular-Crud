'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUsersSchema extends Schema {
  up () {
    
      // alter table
      this.raw("ALTER TABLE users ADD COLUMN editMode BOOLEAN DEFAULT FALSE;")
  
  }

  down () {
    this.table('alter_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterUsersSchema
