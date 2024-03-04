import usedCars from "./usedCars.js";
import { Setup_Car_Grid, Iterate_Car_Models, Setup_Button_Grid } from "./DOM/elements.js";

Setup_Button_Grid();
Setup_Car_Grid();
usedCars.map(Iterate_Car_Models);

