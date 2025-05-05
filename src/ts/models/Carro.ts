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
}
