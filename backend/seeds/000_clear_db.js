//TODO expand this section to be able to make the full DB schema
exports.seed = async function(knex) {
    await knex('users').del(); //delete all users
};