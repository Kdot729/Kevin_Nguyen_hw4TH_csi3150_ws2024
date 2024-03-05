import usedCars from "./usedCars.js";

export function Filter_By_Parameters(Filter_Parameters)
{
    let Filter_Dictionary = {};
    for (let Index = 0; Index < Filter_Parameters.length; Index++)
    {
        let Key_and_Value = Filter_Parameters[Index].split("-")
        Filter_Dictionary[Key_and_Value[0]] = Key_and_Value[1]
    }


    console.log(Filter_Dictionary)
    // let Filtered_Data =  usedCars.filter((used_car) =>
    // {
    //     return used_car.includes(Filter_Parameters);
    // });

    // console.log(Filtered_Data);
};