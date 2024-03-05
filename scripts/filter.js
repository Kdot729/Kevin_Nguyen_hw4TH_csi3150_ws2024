import usedCars from "./usedCars.js";

export function Filter_By_Min_Year(Selected_Year)
{
    let Year_Car =  usedCars.filter((used_car) =>
    {
        return used_car["year"] > Selected_Year;
    });
};