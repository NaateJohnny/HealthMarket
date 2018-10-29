'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('product_name',100)
      table.string('image_url')
      table.string('description',240)
      table.float('price')
      table.string('anvisa_code')
      table.integer('drugstore_id')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('drugstores')
           .onUpdate('CASCADE')
           .onDelete('CASCADE')
      table.integer('stock').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
