import { Capitalize_First_Letter } from "../utility.js";
import usedCars from "../usedCars.js";
import {Filter_By_Min_Year } from "../filter.js";

const Checkbox_ID = "checkboxes";

export function Setup_Checkbox_Grid()
{
    let Button_Container = document.getElementById(Checkbox_ID);
    let Column_Size = innerWidth / 6;
    Button_Container.style.cssText =  `
                                    display: grid; 
                                    box-sizing: border-box;
                                    grid-row: 1 / span 1;
                                    grid-template-columns: repeat(6, ${Column_Size}px);
                                    grid-template-rows: repeat(1, 100%);
                                    `;

    let Filter_By = ["min-year", "max-year", "make", "mileage", "max-price", "color"];
    Append_Sections(Filter_By);
    Append_Checkboxes(Filter_By);

};

export function Append_Sections(Filter_By)
{  
    for (let Index = 0; Index < Filter_By.length; Index++) 
    {
        let Section = document.createElement("section");
        Section.setAttribute("id", Filter_By[Index]);
        Section.style.cssText = `
                                    display: grid; 
                                    grid-template-columns: repeat(2, 50%);
                                    grid-template-rows: 10% repeat(15, 6%);
                                `;
        document.getElementById(Checkbox_ID).appendChild(Section);

        Append_Header(Filter_By[Index]);
        Append_Checkboxes(Filter_By[Index]);
    };
};

function Append_Header(Index_of_Filter_By)
{
    let Header = document.createElement("h1");
    let Split_Word = Index_of_Filter_By.split("-");

    var Capitalized_Words_Array = [];
    for (let Index = 0; Index < Split_Word.length; Index++)
    {
        Capitalized_Words_Array.push(Capitalize_First_Letter(Split_Word[Index]));
    };
    Header.style.cssText = `
                            grid-column: 1 / span 2;
                            text-align: center
                            `;
    let Capitalized_Word = Capitalized_Words_Array.join(" ")

    let Header_Text = document.createTextNode(Capitalized_Word);
    Header.appendChild(Header_Text);
    document.getElementById(Index_of_Filter_By).appendChild(Header);
};

function Append_Checkboxes(Filter_By)
{
    let Checkboxes_to_Create = ["year", "make", "milage", "price", "color"];
    let Year_Checkbox = []
    
    for (let Data_Index = 0; Data_Index < usedCars.length; Data_Index++)
    {
        if (!Year_Checkbox.includes(usedCars[Data_Index]["year"]))
        {
            Year_Checkbox.push(usedCars[Data_Index]["year"])
        };

    };
    console.log(Year_Checkbox)
};