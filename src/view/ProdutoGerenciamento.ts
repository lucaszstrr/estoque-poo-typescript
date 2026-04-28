import PromptSync from "prompt-sync";
import MainController from "../control/MainController";

export default class ProdutoGerenciamento{
    private prompt = PromptSync();
    private controller: MainController;

    constructor(controller: MainController) {
        this.controller = controller;
    }

    public cadastrarProduto(): void {
        console.log("\n-----CADASTRO DE PRODUTO-----\nCategoria:\n1. Alimento\n2. Vestuario\nEscolha: ");
        let opcao = parseInt(this.prompt(""));
        
        switch (opcao) {
            case 1:
                this.cadastrarAlimento();
                break;
            case 2:
                this.cadastrarVestuario();
                break;
            default:
                console.log("Categoria inválida.");
        }
    }

    private cadastrarAlimento(): string {
        const nome = this.prompt("Nome do alimento: ");
        const preco = parseFloat(this.prompt("Preço: R$"));
        const quantidade = parseInt(this.prompt("Quantidade em estoque: "));
        const validade = this.prompt("Data de validade (dd/mm/aaaa): ");
        const perecivel = this.prompt("É perecível? (s/n): ").toLowerCase() === "s";

        return this.controller.produtoService.cadastrarAlimento(nome, preco, quantidade, validade, perecivel);
    }

    private cadastrarVestuario(): string {
        const nome = this.prompt("Nome da peça: ");
        const preco = parseFloat(this.prompt("Preço: R$"));
        const quantidade = parseInt(this.prompt("Quantidade em estoque: "));
        const tamanho = this.prompt("Tamanho (P/M/G/GG): ");
        const material = this.prompt("Material (ex: algodão, poliéster): ");

        return this.controller.produtoService.cadastrarVestuario(nome, preco, quantidade, tamanho, material);
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