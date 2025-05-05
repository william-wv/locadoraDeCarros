import { Peaple } from "./Peaple";

export class Cliente extends Peaple {
  constructor(
    nome: string,
    documento: string,
    private carteiraMotorista: string = 'B'
  ) {
    super(nome, documento);
  }

  // Getter e Setter para 'carteiraMotorista'
  getCarteiraMotorista(): string {
    return this.carteiraMotorista;
  }

  setCarteiraMotorista(carteiraMotorista: string): void {
    this.carteiraMotorista = carteiraMotorista;
  }

  validarCarteiraMotorista(): boolean {
    // Exemplo: verifica se a carteira tem 7 caracteres
    return this.carteiraMotorista.length === 7;
  }
}