export function Capitalize_First_Letter(Word) 
{
    return Word.charAt(0).toUpperCase() + Word.slice(1);
};

export function Get_Array_of_Values(usedCars, Index_Dictionary)
{
    //Note Because the way the array Filter_By is set up we're doing it this way
    let Key_for_Dictionary = Index_Dictionary.split("-")[1] ? Index_Dictionary.split("-")[1] : Index_Dictionary.split("-")[0];
    let Hold_Values = []
    for (let Data_Index = 0; Data_Index < usedCars.length; Data_Index++)
    {
        if (!Hold_Values.includes(usedCars[Data_Index][Key_for_Dictionary]))
        {
            Hold_Values.push(usedCars[Data_Index][Key_for_Dictionary])
        };
    };
    return Hold_Values
};