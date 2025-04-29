// Classe base
class Pagamento {
  public processar(): void {
    console.log("Processando pagamento genérico...");
  }
}

// Subclasse: Pagamento com cartão
class PagamentoCartao extends Pagamento {
  public override processar(): void {
    console.log("Processando pagamento com cartão de crédito...");
  }
}

// Subclasse: Pagamento com Pix
class PagamentoPix extends Pagamento {
  public override processar(): void {
    console.log("Processando pagamento via Pix...");
  }
}

// Subclasse: Pagamento com dinheiro
class PagamentoDinheiro extends Pagamento {
  public override processar(): void {
    console.log("Pagamento realizado em dinheiro na retirada do carro.");
  }
}

// Testando
const pagamentos: Pagamento[] = [
  new PagamentoCartao(),
  new PagamentoPix(),
  new PagamentoDinheiro()
];

pagamentos.forEach(p => p.processar());
