
exports.up = (knex) => {
  return knex.schema.createTable('snacks', table => {
    table.increments();
    table.text('snack_picture_url').notNullable();
    table.string('snack_name').notNullable();
    table.float('price').notNullable();
    table.integer('rating').notNullable();


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snacks');
};
