import { LocadoraService } from "../services/LocadoraService";
import { Carro } from "../models/Carro";
import { Cliente } from "../models/Cliente";

export class LocadoraController {
  constructor(private service: LocadoraService) {}

  adicionarCarro(placa: string, modelo: string, ano: number): void {
    const carro = new Carro(placa, modelo, ano);
    this.service.adicionarCarro(carro);
  }

  adicionarCliente(nome: string, documento: string, carteira:string): void {
    const cliente = new Cliente(nome, documento , carteira);
    this.service.adicionarCliente(cliente);
  }

  listarDisponiveis(): Carro[] {
    return this.service.listarCarrosDisponiveis();
  }

  alugarCarro(placa: string): boolean {
    return this.service.alugarCarro(placa);
  }

  devolverCarro(placa: string): boolean {
    return this.service.devolverCarro(placa);
  }
}
