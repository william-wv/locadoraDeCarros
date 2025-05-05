import { LocadoraService } from "./services/LocadoraService";
import { LocadoraController } from "./controller/LocadoraController";
import { View } from "./view/View";

const service = new LocadoraService();
const controller = new LocadoraController(service);
const view = new View(controller);

view.iniciar();
