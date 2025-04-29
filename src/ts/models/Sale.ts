import Carros from "./Carros";
import Client from "./Client";

export default class Sale {
  private car!: Carros;
  private client!: Client;

  public doSale(car: Carros, client: Client) {
    this.car = car;
    this.client = client;
  }

  public getCar(): Carros {
    return this.car;
  }
  public setCar(car: Carros) {
    this.car = car;
  }
  
  public getClient(): Client {
    return this.client;
  }
  public setClient(client: Client) {
    this.client = client;
  }
}
