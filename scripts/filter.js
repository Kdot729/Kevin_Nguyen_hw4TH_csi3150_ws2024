import usedCars from "./usedCars.js";

export function Filter_By_Parameters(Filter_Parameters)
{
    console.log(Filter_Parameters)
    let Array_of_Dictionaries = [];
    for (let Index = 0; Index < Filter_Parameters.length; Index++)
    {
        let Emtpy_Dictionary = {};
        let Key_and_Value = Filter_Parameters[Index].split("-");
        Emtpy_Dictionary[Key_and_Value[0]] = Key_and_Value[1]
        Array_of_Dictionaries.push(Emtpy_Dictionary);
    };


    console.log(Array_of_Dictionaries)
    // let Filtered_Data =  usedCars.filter((used_car) =>
    // {
    //     return used_car.includes(Filter_Parameters);
    // });

    // console.log(Filtered_Data);
};