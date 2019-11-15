
exports.up = function(knex) {
  return knex.schema.createTable('rappers', table => {
      table.increments();

      table.string('rapper', 255).notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rappers');
};
