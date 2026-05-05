import Database from "../Database";
import Alimento from "../model/Alimento";
import Produto from "../model/Produto";
import Vestuario from "../model/Vestuario";
import { TamanhoVestuario } from "../enums/TamanhoVestuario";

export default class ProdutoService {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public cadastrarAlimento(nome: string, preco: number, quantidade: number, validade: string, perecivel: boolean): string{
        if (!nome || nome.trim() === "") {
            return "Nome do produto não pode ser vazio";
        }

        if (preco < 0) return "Preço inválido";
        if (quantidade < 0) return "Quantidade inválida";

        const alimento = new Alimento();
        alimento.setNome(nome);
        alimento.setPreco(preco);
        alimento.setQuantidade(quantidade);
        alimento.setValidade(validade);
        alimento.setPerecivel(perecivel);

        this.database.produtos.push(alimento);
        return "Alimento cadastrado com sucesso!";
    }

    public cadastrarVestuario(nome: string, preco: number, quantidade: number, tamanho: string, material: string): string {
        if (!nome || nome.trim() === "") return "Nome do produto não pode ser vazio";
        if (preco < 0) return "Preço inválido";
        if (quantidade < 0) return "Quantidade inválida";

        if (tamanho != TamanhoVestuario.PEQUENO && tamanho != TamanhoVestuario.MEDIO && tamanho != TamanhoVestuario.GRANDE && tamanho != TamanhoVestuario.EXTRA_GRANDE){
            console.log("\nTamanho inválido! Digite apenas P, M, G ou GG\n");
            return;
        }
        
        const tamanhoEnum = tamanho as TamanhoVestuario;
        const vestuario = new Vestuario();
        vestuario.setNome(nome);
        vestuario.setPreco(preco);
        vestuario.setQuantidade(quantidade);
        vestuario.setTamanho(tamanhoEnum);
        vestuario.setMaterial(material);

        this.database.produtos.push(vestuario);
        return "Vestuário cadastrado com sucesso!";
    }

    public removerProduto(indiceProduto: number, quantidade: number): string;
    public removerProduto(nomeProduto: string, quantidade: number): string;

    public removerProduto(identificador: number | string, quantidade: number): string {
        let produto;

        if (typeof identificador === "number") {
            produto = this.database.produtos[identificador];
        } else {
            produto = this.database.produtos.find(produto => produto.getNome() === identificador);
        }

        if (!produto) return "Produto não existe";
        if (quantidade <= 0) return "Quantidade inválida";
        if (quantidade > produto.getQuantidade()) return "Quantidade maior que o estoque";

        produto.setQuantidade(produto.getQuantidade() - quantidade);
        return `A quantidade atual do produto ${produto.getNome()} é de ${produto.getQuantidade()}`;
    }

    public listarProdutos(): Produto[] {
        return this.database.produtos;
    }
}