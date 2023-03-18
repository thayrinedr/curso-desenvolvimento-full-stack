import Editora from "../modelo/Editora";

const editoras : Array<Editora> = [{
    codEditora: 1,
    nome: "Editora 1"
},{
    codEditora: 2,
    nome: "Editora 2"
},{
    codEditora: 3,
    nome: "Editora 3"
}];

export default class ControleEditora {
    public getNomeEditora(codEditora: number) {
        const resultados = editoras.filter(editora => editora.codEditora == codEditora);
        if (resultados.length == 0) return "Editora não encontrada";
        return resultados[0].nome;
    }

    public getEditoras() {
        return editoras;
    }
}