'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Weapon
 */
class Weapon extends BaseModel {
  /**
   * Exclude created_at and updated_at from the model
   */
  static get timestamps () {
    return false
  }
  /**
   * Weapon's schema
   */
  static get schema () {
    return {

    }
  }
}

module.exports = Weapon.buildModel('Weapon')
