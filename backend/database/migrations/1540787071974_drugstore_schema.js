'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DrugstoreSchema extends Schema {
  up () {
    this.create('drugstores', (table) => {
      table.increments()
      table.string('social_name').notNullable()
      table.string('cnpj',14).notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('address')
      table.string('zip_code',8)
      table.string('latitud')
      table.string('longitud')
      table.timestamps()
    })
  }

  down () {
    this.drop('drugstores')
  }
}

module.exports = DrugstoreSchema
