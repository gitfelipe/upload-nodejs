exports.up = function (knex) {
    return knex.schema.createTable('uploads', (table) => {
        table.increments();

        table.string('image').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('uploads');
};
