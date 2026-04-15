import MainController from "../control/MainController";
import promptSync from 'prompt-sync';
import ProdutoGerenciamento from "./ProdutoGerenciamento";

export default class FirstScreen {

    private prompt = promptSync();
    private controller: MainController;
    private gerenciamento: ProdutoGerenciamento;

    constructor(controller: MainController) {
        this.controller = controller;
        this.gerenciamento = new ProdutoGerenciamento(controller);
        this.mainMenu();
    }

    public mainMenu(): void {
        let open: boolean = true;

        while (open) {
            console.log("-----SISTEMA DE ESTOQUE-----\n1. Adicionar novo produto\n2. Listar Estoque\n3. Alterar Quantidade\n4. Sair\n");
            let opcao = parseInt(this.prompt(""));
            switch (opcao) {
                case 1:
                    this.gerenciamento.cadastrarProduto();
                    break;
                case 2:
                    this.listarEstoque();
                    break;
                case 3:
                    this.gerenciamento.removerProduto();
                    break;
                case 4:
                    console.log("Você escolheu encerrar o sistema. Até logo!")
                    open = false;
                    break;
                default:
                    console.log("Opção inválida, escolha entre 1 a 4")
                    break;
            }
        }
    }

    private listarEstoque(): void{
        const produtos = this.controller.listarProdutos();
        console.log("\n-----ESTOQUE ATUAL-----");
 
        if (produtos.length === 0) {
            console.log("Nenhum produto cadastrado\n");
            return;
        }
 
        produtos.forEach((produto, i) => {
            console.log(`${i + 1}. ${produto.infoProduto()}`);
        });
 
        console.log(`\nTotal de produtos: ${produtos.length}\n`);
    }
}