'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('MongoModel')

class Bar extends Model {

    static get connection(){
        return 'mongodb';
    }

   
}

module.exports = Bar
