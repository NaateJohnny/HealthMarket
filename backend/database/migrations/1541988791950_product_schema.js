'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 80),
      table.string('description', 250)
      table.float('price')
      table.string('image_url')
      table.integer('drugstore_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('drugstores')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
