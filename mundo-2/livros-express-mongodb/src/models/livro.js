const mongoose = require("../database");

const LivrosSchema = new mongoose.Schema({
  titulo: {
    type: String,
  },

  resumo: {
    type: String,
    require: true,
  },

  editora: {
    type: String,
    require: true,
  },

  autores: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Livros = mongoose.model("Livros", LivrosSchema);

module.exports = Livros;