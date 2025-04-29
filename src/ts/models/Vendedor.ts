import Pessoa from "./Pessoa"

export class Vendedor extends Pessoa {
  private comissaoVenda!: Number

  public getComissaoVenda(): Number {
    return this.comissaoVenda;
  }

  public setComissaoVenda(comissaoVenda: Number): void {
    this.comissaoVenda = comissaoVenda;
  }
  
}