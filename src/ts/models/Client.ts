export default class Client {
  private name!: string
  private cpf!: string


  public getName():string{
    return this.name
  }
  public setName(name:string){
    this.name = name
  }
} 