import Database from "../Database";
import Alimento from "../model/Alimento";
import Produto from "../model/Produto";
import Vestuario from "../model/Vestuario";
import ProdutoService from "../service/ProdutoService";
import FirstScreen from "../view/FirstScreen";

export default class MainController {
    //Inicia o sistema na tela inicial
    private firstScreen!: FirstScreen;
    public database: Database = new Database();
    public produtoService: ProdutoService = new ProdutoService(this.database);

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
        return this.produtoService.listarProdutos();
    }

    public removerProduto(indiceProduto: number, quantidade: number): string{
        return this.produtoService.removerProduto(indiceProduto, quantidade);
    }

}