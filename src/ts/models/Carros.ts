import Engine from "./Engine";

export default class Carros {
  private model!: string;
  private year!: number;
  public engine: Engine = new Engine();

  public getModel(): string {
    return this.model;
  }
  public setModel(model: string): void {
    this.model = model;
  }

  public getYear(): number {
    return this.year;
  }
  public setYear(year: number): void {
    this.year = year;
  }
}
