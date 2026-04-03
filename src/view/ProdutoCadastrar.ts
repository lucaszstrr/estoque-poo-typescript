import promptSync from 'prompt-sync';
import MainController from '../control/MainController';

export default class ProdutoCadastrar {

    private prompt = promptSync();
    private controller: MainController;

    constructor(controller: MainController) {
        this.controller = controller;
        this.cadastrarProduto();
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

    private cadastrarAlimento(): void {
        const produto = this.controller.getNovoAlimento();

        produto.setNome(this.prompt("Nome do alimento: "));
        produto.setPreco(parseFloat(this.prompt("Preço (R$): ")));
        produto.setQuantidade(parseInt(this.prompt("Quantidade em estoque: ")));
        produto.validade = this.prompt("Data de validade (dd/mm/aaaa): ");
        produto.perecivel = this.prompt("É perecível? (s/n): ").toLowerCase() === "s";
 
        this.controller.database.produtos.push(produto);
        console.log("Alimento cadastrado com sucesso!\n");
    }

    private cadastrarVestuario(): void {
        const produto = this.controller.getNovoVestuario();

        produto.setNome(this.prompt("Nome do vestuário: "));
        produto.setPreco(parseFloat(this.prompt("Preço (R$): ")));
        produto.setQuantidade(parseInt(this.prompt("Quantidade em estoque: ")));
        produto.tamanho = this.prompt("Tamanho (P/M/G/GG): ");
        produto.material = this.prompt("Material (ex: algodão, poliéster): ");
 
        this.controller.database.produtos.push(produto);
        console.log("Vestuário cadastrado com sucesso!\n");
    }
}