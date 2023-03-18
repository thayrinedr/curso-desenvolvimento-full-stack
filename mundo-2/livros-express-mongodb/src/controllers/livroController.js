const Livro = require("../models/livro");

exports.lista = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Livro.findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: "Livro não encontrado com id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Erro ao recuperar usuário com id " + id });
      });
  } else {
    Livro.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Ocorreu um erro ao recuperar as informações do livro",
        });
      });
  }
};

exports.cadastrar = async (req, res) => {
  const { titulo, resumo, editora, autores } = req.body;

  try {
    if (await Livro.findOne({ titulo }))
      return res.status(400).send({ error: "livro já cadastrado" });

    const livro = await Livro.create({
      titulo,
      resumo,
      editora,
      autores,
    });

    return res.send({ livro });
  } catch (error) {
    return res.status(400).send({ error: "Erro ao cadastrar o livro" });
  }
};

exports.update = (req, res) => {
  const id = req.params.id;

  Livro.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não é possível atualizar o livro com ${id}. Talvez usuário não encontrado`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Erro Atualizar informações do livro" });
    });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  await Livro.findByIdAndRemove({ _id: id })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não é possível excluir com id ${id}. Talvez o ID esteja errado`,
        });
      } else {
        res.send({
          message: "O livro foi excluído com sucesso!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possível excluir o livro com id=" + id,
      });
    });
};
