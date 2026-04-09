import Produto from "./Produto";

export default class Vestuario extends Produto{
    private tamanho: string;
    private material: string;

    public getTamanho(): string {
        return this.tamanho;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setTamanho(tamanho: string): void {
        this.tamanho = tamanho;
    }

    public setMaterial(material: string): void {
        this.material = material;
    }
}