export default class Client {
  private name!: string;

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
}
