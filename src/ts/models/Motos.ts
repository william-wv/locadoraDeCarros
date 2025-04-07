
import { Veiculo } from './Veiculo';

export class Carro extends Veiculo {
  constructor(
    placa: string,
    marca: string,
    modelo: string,
    ano: number,
    valorDiaria: number,
    public  cilindradas: number
  ) {
    super(placa, marca, modelo, ano, valorDiaria);
  }

}
