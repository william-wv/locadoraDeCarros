import PromptSync from "prompt-sync";
import Database from "../db/DataBase";
import MainController from "../controller/controller";
import Car from "../models/Carros";

export default class CarRegister {

    private prompt = PromptSync();
    private control: MainController;

    public constructor(control: MainController) {
        this.control = control;
    }

    public addCar() {
        let car: Car = this.control.getNewCar();
        // pedir ao user dos dados
        let model: string = this.prompt("\ndigite o modelo do carro");
        let year: number = parseInt(this.prompt("\ndigite o ano"));
        // populando o objeto
        car.setYear(year);
        car.setModel(model);
        //guardando o carro no banco
        this.control.db.addNewCar(car);
    }
}
