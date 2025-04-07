
import { Veiculo } from './Veiculo';

export class Carro extends Veiculo {
  constructor(
    placa: string,
    marca: string,
    modelo: string,
    ano: number,
    valorDiaria: number,
    public portas: number,
    public cavalos: number
  ) {
    super(placa, marca, modelo, ano, valorDiaria);
  }

}
