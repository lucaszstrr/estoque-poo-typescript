import promptSync from 'prompt-sync';
import MainController from '../control/MainController';

export default class ProdutoRemover {

    private prompt = promptSync();
    private controller: MainController;

    constructor(controller: MainController) {
        this.controller = controller;
        this.removerProduto();
    }

    public removerProduto(): void{
        console.log("-----SELECIONE O PRODUTO-----");

        const produtos = this.controller.listarProdutos();

        produtos.forEach((produto, i) => {
            console.log(`[${i + 1}] - ${produto.getNome()}`)
        });

        console.log(`Digite o índice do produto que deseja remover`);
        let indice = parseInt(this.prompt(""));

        console.log(`Digite a quantidade que deseja remover`);
        let quantidade = parseInt(this.prompt(""));

        this.controller.removerProduto(indice - 1, quantidade);
    }

}