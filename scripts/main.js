import usedCars from "./usedCars.js";
import { Setup_Grid, Iterate_Car_Models, Setup_Button_Grid } from "./elements.js";

Setup_Grid();
Setup_Button_Grid();
usedCars.map(Iterate_Car_Models);

