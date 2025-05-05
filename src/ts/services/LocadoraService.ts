import { Carro } from "../models/Carro";
import { Cliente } from "../models/Cliente";
import { Database } from "../db/Database";

export class LocadoraService {
  adicionarCarro(carro: Carro): void {
    Database.carros.push(carro);
  }

  adicionarCliente(cliente: Cliente): void {
    Database.clientes.push(cliente);
  }
  listarCarrosDisponiveis(): Carro[] {
    return Database.carros.filter(c => c.getDisponivel());
  }
  
  alugarCarro(placa: string): boolean {
    const carro = Database.carros.find(c => c.placa === placa && c.getDisponivel());
    if (carro) {
      carro.setDisponivel(false);
      return true;
    }
    return false;
  }
  
  devolverCarro(placa: string): boolean {
    const carro = Database.carros.find(c => c.placa === placa && !c.getDisponivel());
    if (carro) {
      carro.setDisponivel(true);
      return true;
    }
    return false;
  }
  
}