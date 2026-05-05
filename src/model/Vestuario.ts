import { TamanhoVestuario } from "../enums/TamanhoVestuario";
import Produto from "./Produto";

export default class Vestuario extends Produto{
    private tamanho: TamanhoVestuario;
    private material: string;

    public getTamanho(): string {
        return this.tamanho;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setTamanho(tamanho: TamanhoVestuario): void {
        this.tamanho = tamanho;
    }

    public setMaterial(material: string): void {
        this.material = material;
    }

    public override infoProduto(): string {
        return `[Vestuário] Nome: ${this.nome} | Preço: R$${this.preco} | Qtd: ${this.quantidade} | Tamanho: ${this.tamanho} | Material: ${this.material}`;
    }
}