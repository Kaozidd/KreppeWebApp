
exports.up = function(knex, Promise) {
    return knex
      .schema
      .createTable('products', function(t) {
        t.increments();
        t.string('name');
        t.text('description');
        t.string('img');
        t.integer('price');
        t.integer('typeId');
        t.integer('lineId')
      })
};

exports.down = function(knex, Promise) {
    return knex
      .schema
      .dropTableIfExists('products')
};
