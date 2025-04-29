export default class Endereco {
  private cep!: Number;
  private estado!: String;
  private cidade!: String;
  private rua!: String;
  private numberR!: Number;

  public getCep(): Number {
    return this.cep;
  }

  public setCep(cep: Number): void {
    this.cep = cep;
  }

  public getEstado():String {
    return this.estado
  }
  
  public setEstad(estado:String):void{
    this.cidade = estado
  }

  public getCidade():String {
    return this.cidade
  }
  
  public setCidade(cidade:String):void{
    this.cidade = cidade
  }

  public getRua():String {
    return this.rua
  }
  
  public setRua(rua:String):void{
    this.rua = rua
  }

  public getNumber():String {
    return this.rua
  }
  
  public setNumber(numberR:Number):void{
    this.numberR = this.numberR
  }
}
