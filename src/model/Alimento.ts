import Produto from "./Produto";

export default class Alimento extends Produto{
    public validade: string;
    public perecivel: boolean;

    public exibirInfo(): string {
        return `[Alimento] ${this.nome} | R$${this.preco.toFixed(2)} | Qtd: ${this.quantidade} | Validade: ${this.validade} | Perecível: ${this.perecivel ? "Sim" : "Não"}`;
    }
}