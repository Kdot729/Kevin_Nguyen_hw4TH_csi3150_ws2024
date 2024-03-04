import usedCars from "./usedCars.js";
import { Setup_Car_Grid, Iterate_Car_Models } from "./DOM/elements.js";
import { Setup_Button_Grid } from "./DOM/buttons.js";

Setup_Button_Grid();
Setup_Car_Grid();
usedCars.map(Iterate_Car_Models);

