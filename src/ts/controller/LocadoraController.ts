import { LocadoraService } from "../services/LocadoraService";
import { Carro } from "../models/Carro";
import { Cliente } from "../models/Cliente";

export class LocadoraController {
  constructor(private service: LocadoraService) {}

 // LocadoraController.ts
adicionarCarro(carro: Carro): void;
adicionarCarro(placa: string, modelo: string, ano: number): void;
adicionarCarro(param1: any, param2?: any, param3?: any): void {
  if (param1 instanceof Carro) {
    this.service.adicionarCarro(param1);
  } else {
    const carro = new Carro(param1, param2, param3);
    this.service.adicionarCarro(carro);
  }
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
