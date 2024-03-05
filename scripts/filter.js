import usedCars from "./usedCars.js";

export function Filter_By_Parameters(Filter_Parameters)
{
    let Array_of_Dictionaries = [];
    for (let Index = 0; Index < Filter_Parameters.length; Index++)
    {
        let Emtpy_Dictionary = {};
        let Key_and_Value = Filter_Parameters[Index].split("-")

        if (Key_and_Value[0] == "min" || Key_and_Value[0] == "max")
        {
            Key_and_Value.shift();
        };

        console.log(Key_and_Value)
        Emtpy_Dictionary[Key_and_Value[0]] = Key_and_Value[1]
        Array_of_Dictionaries.push(Emtpy_Dictionary);
    };

    let Cars_Meet_Requirements = []
    for (let [key, Dictionary_Value] of Object.entries(usedCars)) 
    {
        for (let Index = 0; Index < Array_of_Dictionaries.length; Index++)
        {
            let Key_for_Dictionary = Object.keys(Array_of_Dictionaries[Index])[0];

            if (Dictionary_Value[Key_for_Dictionary] == Array_of_Dictionaries[Index][Key_for_Dictionary])
            {
                Cars_Meet_Requirements.push(Dictionary_Value);
            };
        };
    };

    console.log(Cars_Meet_Requirements);
    return Cars_Meet_Requirements;
};