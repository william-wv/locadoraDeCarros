import { Veiculo } from "./Veiculo";

// Carro.ts
export class Carro extends Veiculo {
  constructor(
    placa: string,
    modelo: string,
    ano: number,
    private disponivel: boolean = true
  ) {
    super(placa, modelo, ano);
  }

  getDisponivel(): boolean {
    return this.disponivel;
  }

  setDisponivel(disponivel: boolean): void {
    this.disponivel = disponivel;
  }

  // SOBRESCRITA
  toString(): string {
    return `${this.modelo} (${this.ano}) - Placa: ${this.placa} - ${this.disponivel ? 'Disponível' : 'Alugado'}`;
  }
}
