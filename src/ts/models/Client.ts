import Pessoa from "./Pessoa";

export default class Client extends Pessoa{
  private carteiraTipo!: String

  public getCarteiraTipo(): String {
    return this.carteiraTipo;
  }
  public setCarteiraTipo(carteiraTipo: string): void {
    this.carteiraTipo = carteiraTipo;
  }

}
