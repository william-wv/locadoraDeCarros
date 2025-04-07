// Interfaces e tipos 

// src/interfaces/VeiculoInterface.ts
export interface IVeiculo {
  placa: string;
  marca: string;
  modelo: string;
  ano: number;
  valorDiaria: number;
  disponivel: boolean;

  alugar(): void;
  devolver(): void;
  calcularAluguel(dias: number): number;
}
