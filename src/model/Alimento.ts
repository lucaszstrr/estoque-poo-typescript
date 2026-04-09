import Produto from "./Produto";

export default class Alimento extends Produto{
    private validade: string;
    private perecivel: boolean;

    public getValidade(): string {
        return this.validade;
    }

    public getPerecivel(): boolean {
        return this.perecivel;
    }

    public setValidade(validade: string): void {
        this.validade = validade;
    }

    public setPerecivel(perecivel: boolean): void {
        this.perecivel = perecivel;
    }

    public exibirInfo(): string {
        return `[Alimento] ${this.nome} | R$${this.preco.toFixed(2)} | Qtd: ${this.quantidade} | Validade: ${this.validade} | Perecível: ${this.perecivel ? "Sim" : "Não"}`;
    }
}