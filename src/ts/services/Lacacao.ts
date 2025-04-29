export class Locacao {
  // Assinatura para pessoa física
  alugarCarro(cpf: string): void;

  // Assinatura para empresa
  alugarCarro(cnpj: string, nomeEmpresa: string): void;

  // Implementação única
  alugarCarro(id: string, nomeEmpresa?: string): void {
    if (nomeEmpresa) {
      console.log(`Aluguel feito para empresa: ${nomeEmpresa}, CNPJ: ${id}`);
    } else {
      console.log(`Aluguel feito para pessoa física: CPF ${id}`);
    }
  }
}

// Testando
const locadora = new Locacao();
locadora.alugarCarro("123.456.789-00");                
locadora.alugarCarro("12.345.678/0001-00", "AutoLux");
