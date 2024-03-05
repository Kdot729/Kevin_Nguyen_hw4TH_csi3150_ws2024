export function Capitalize_First_Letter(Word) 
{
    return Word.charAt(0).toUpperCase() + Word.slice(1);
};

export function Get_Array_of_Values(usedCars, Index_Dictionary)
{
    let Hold_Values = []
    for (let Data_Index = 0; Data_Index < usedCars.length; Data_Index++)
    {
        if (!Hold_Values.includes(usedCars[Data_Index][Index_Dictionary]))
        {
            Hold_Values.push(usedCars[Data_Index][Index_Dictionary])
        };
    };

    return Hold_Values

}