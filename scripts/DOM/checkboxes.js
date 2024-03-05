import { Capitalize_First_Letter, Get_Array_of_Values } from "../utility.js";
import usedCars from "../usedCars.js";
import { Filter_By_Min_Year } from "../filter.js";

const Checkbox_ID = "checkboxes";

export function Setup_Checkbox_Grid()
{
    let Button_Container = document.getElementById(Checkbox_ID);

    let Column_Size = (innerWidth / 6) - 10;
    Button_Container.style.cssText =  `
                                    display: grid; 
                                    box-sizing: border-box;
                                    grid-row: 1 / span 1;
                                    grid-template-columns: repeat(6, ${Column_Size}px);
                                    grid-template-rows: repeat(1, 100%);
                                    `;

    let Filter_By = ["min-year", "max-year", "make", "mileage", "max-price", "color"];
    Append_Sections(Filter_By);
    Append_Button(innerWidth - (Column_Size * 6));

};

function Append_Button(Button_Width)
{
    let Checkbox_Button = document.createElement("BUTTON");
    Checkbox_Button.type = "button";
    document.getElementById(Checkbox_ID).appendChild(Checkbox_Button);
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

    let Distinct_Values = Get_Array_of_Values(usedCars, Filter_By);
    for (let Distinct_Values_Index = 0; Distinct_Values_Index < Distinct_Values.length; Distinct_Values_Index++)
    {

        let Input = document.createElement("input");
        Input.type = "checkbox";
        let ID = `${Filter_By}-${Distinct_Values[Distinct_Values_Index]}`;
        let Value = Distinct_Values[Distinct_Values_Index];
        Input.setAttribute("id", ID);
        Input.setAttribute("name", ID);
        Input.setAttribute("value", Value);

        let Label = document.createElement("Label");
        var Label_Text = document.createTextNode(Value);
        Label.setAttribute("for", Value);
        Label.appendChild(Label_Text);

        document.getElementById(Filter_By).appendChild(Input);
        document.getElementById(Filter_By).appendChild(Label);
    };

};