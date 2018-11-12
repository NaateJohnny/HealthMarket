'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DrugstoreSchema extends Schema {
  up () {
    this.create('drugstores', (table) => {
      table.increments()
      table.string('social_name').notNullable()
      table.string('cnpj',14).notNullable().unique()
      table.string('phone',11)
      table.string('email')
      table.string('address', 100)
      table.string('zip_code')
      table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('drugstores')
  }
}

module.exports = DrugstoreSchema
