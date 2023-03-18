$("#novo_livro").submit(function (event) {
  event.preventDefault();

  var data = {
    titulo: $("#inputTitulo").val(),
    resumo: $("#inputResumo").val(),
    editora: $("#inputEditora").val(),
    autores: $("#inputAutores").val(),
  };

  var request = {
    url: `http://localhost:3000/api/livro/`,
    method: "POST",
    data: data,
  };
  $.ajax(request).done(function (response) {
    alert("Livro cadastrado com sucesso!");
      $("#inputTitulo").val(""),
      $("#inputResumo").val(""),
      $("#inputEditora").val(""),
      $("#inputAutores").val("");
  });
});

$("#atualizar_livro").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(data);

  var request = {
    url: `http://localhost:3000/api/livro/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Livro atualizado com sucesso!");
    window.location.href = "/";
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/livro/${id}`,
      method: "DELETE",
    };

    if (confirm("Deseja mesmo excluir este livro?")) {
      $.ajax(request).done(function (response) {
        alert("Livro excluido com sucesso!");
        location.reload();
      });
    }
  });
}