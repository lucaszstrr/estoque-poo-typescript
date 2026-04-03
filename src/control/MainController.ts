import Database from "../Database";
import Alimento from "../model/Alimento";
import Produto from "../model/Produto";
import Vestuario from "../model/Vestuario";
import FirstScreen from "../view/FirstScreen";

export default class MainController {
    //Inicia o sistema na tela inicial
    private firstScreen!: FirstScreen;
    public database: Database = new Database();

    constructor() {
        this.firstScreen = new FirstScreen(this);
    }

    public getNovoProduto(): Produto {
        return new Produto();
    }

    public getNovoAlimento(): Alimento{
        return new Alimento();
    }

    public getNovoVestuario(): Vestuario{
        return new Vestuario();
    }

    public listarProdutos(): Produto[]{
        return this.database.produtos;
    }

    public removerProduto(indiceProduto: number, quantidade: number): string{
        let produto = this.database.produtos[indiceProduto];

        if (!produto) {
            return "Produto não existe";
        }

        if (quantidade <= 0) {
            return "Quantidade inválida";
        }

        if (quantidade > produto.getQuantidade()) {
            return "Quantidade inválida";
        }

        produto.setQuantidade(produto.getQuantidade() - quantidade);

        return `A quantidade atual do produto ${produto.getNome()} é de ${produto.getQuantidade()}`
    }

}