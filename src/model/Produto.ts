export default class Produto {
   protected nome: string;
   protected preco: number;
   protected quantidade: number;

   public setNome(nome: string): void{
      this.nome = nome;
   }

   public setPreco(preco: number): void{
      this.preco = preco;
   }

   public setQuantidade(quantidade: number): void{
      this.quantidade = quantidade;
   }

   public getNome(): string{
      return this.nome;
   }

   public getQuantidade(): number{
      return this.quantidade;
   }

   public infoProduto(): string{
      return `Nome do produto: ${this.nome}\nPreco do produto: R$${this.preco}\nQtd em estoque: ${this.quantidade}`;
   }

}