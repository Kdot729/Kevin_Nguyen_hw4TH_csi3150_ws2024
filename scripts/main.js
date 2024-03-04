import usedCars from "./usedCars.js";
import { Setup_Car_Grid, Append_Car_Card } from "./DOM/car.js";
import { Setup_Button_Grid } from "./DOM/buttons.js";

Setup_Button_Grid();
Setup_Car_Grid();
usedCars.map(Append_Car_Card);

