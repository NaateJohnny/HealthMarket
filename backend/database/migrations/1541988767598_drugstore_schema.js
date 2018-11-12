'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DrugstoreSchema extends Schema {
  up () {
    this.create('drugstores', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('drugstores')
  }
}

module.exports = DrugstoreSchema
