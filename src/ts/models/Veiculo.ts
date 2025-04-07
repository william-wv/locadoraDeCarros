// Classes PO 

export class Veiculo {
  public disponivel: boolean = true;

  constructor(
    public placa: string,
    public marca: string,
    public modelo: string,
    public ano: number,
    public valorDiaria: number
  ) {}

  //gets e sets
  public getPlaca():string{
    return this.placa
  }
  public setPlaca(placa:string):void{
    this.placa = placa
  }

  public getMarca():string {
    return this.marca
  }
  public setMarca(marca:string):void {
    this.marca = marca
  }

  public getModelo():string {
    return this.modelo
  }
  public setModelo(modelo:string):void {
    this.modelo = modelo
  }

  public getAno():number {
    return this.ano
  }
  public setAno(ano:number):void {
    this.ano = ano
  }

  public getDiaria():number {
    return this.valorDiaria
  }
  public setDiaria(valorDiaria:number):void {
    this.valorDiaria = valorDiaria
  }

  //funçoes
  alugar(): void {
    this.disponivel = false;
  }

  devolver(): void {
    this.disponivel = true;
  }

  calcularAluguel(dias: number): number {
    return dias * this.valorDiaria;
  }
}
