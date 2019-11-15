const db = require("../dbconfig");

module.exports = {
  insert,
  find,
  findBy,
  findById,
  remove
};

function find() {
  return db("rappers").select("id", "rapper");
}

function findBy(filter) {
  return db("rappers").where(filter);
}

function findById(id) {
  return db("rappers")
    .where({ id })
    .first();
}

function insert(rapper) {
  return db("rappers")
    .insert(rapper, "id")
    .then(ids => {
        const [id] = ids;
        return findById(id)
    });
}

function remove(id) {
    return db('rappers')
    .del()
    .where({ id })
}