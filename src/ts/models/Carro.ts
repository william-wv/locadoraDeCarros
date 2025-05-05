import { Veiculo } from './Veiculo';

export class Carro extends Veiculo {
  constructor(
    placa: string,
    modelo: string,
    ano: number,
    public disponivel: boolean = true
  ) {
    super(placa, modelo, ano);
  }

  // Getter e Setter para a propriedade 'disponivel'
  getDisponivel(): boolean {
    return this.disponivel;
  }

  setDisponivel(disponivel: boolean): void {
    this.disponivel = disponivel;
  }
}