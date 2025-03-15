// Classe Produto
class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  
    // Método que calcula um desconto de 10%
    calcularDesconto() {
      const desconto = this.preco * 0.10;
      const precoComDesconto = this.preco - desconto;
      return precoComDesconto;
    }
  }
  
  // Classe Livro herda de Produto
  class Livro extends Produto {
    constructor(nome, preco, autor) {
      super(nome, preco); // Chama o construtor da classe pai (Produto)
      this.autor = autor;
    }
  
    // Sobrescreve o método calcularDesconto para aplicar 20% de desconto
    calcularDesconto() {
      const desconto = this.preco * 0.20;
      const precoComDesconto = this.preco - desconto;
      return precoComDesconto;
    }
  }
  
  // Criando instâncias de Produto e Livro
  const produto1 = new Produto("Smartphone", 1000);
  const livro1 = new Livro("A Seleção", 50, "Kiera Cass");
  
  // Exibindo os preços com desconto de forma boniti/nha
  console.log("**********************************");
  console.log("        MINI LOJINHA ONLINE      ");
  console.log("**********************************");
  console.log(`Produto: ${produto1.nome}`);
  console.log(`Preço original: R$ ${produto1.preco.toFixed(2)}`);
  console.log(`Preço com desconto: R$ ${produto1.calcularDesconto().toFixed(2)}`);
  console.log("----------------------------------");
  console.log(`Livro: ${livro1.nome}`);
  console.log(`Autor: ${livro1.autor}`);
  console.log(`Preço original: R$ ${livro1.preco.toFixed(2)}`);
  console.log(`Preço com desconto: R$ ${livro1.calcularDesconto().toFixed(2)}`);
  console.log("**********************************");
  console.log("       Obrigado por comprar!     ");
  console.log("**********************************");
  