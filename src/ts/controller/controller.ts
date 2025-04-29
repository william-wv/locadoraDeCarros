import Database from "../db/DataBase";
import Car from "../models/Carros";
import MainScreen from "../view/view";

export default class MainController {
  public db: Database = new Database();

  constructor() {
    new MainScreen(this);
  }

  public getNewCar(): Car {
    return new Car();
  }
}
