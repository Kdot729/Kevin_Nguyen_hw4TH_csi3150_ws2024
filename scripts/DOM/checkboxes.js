import { Capitalize_First_Letter, Get_Array_of_Values } from "../utility.js";
import usedCars from "../usedCars.js";
import { Filter_By_Parameters } from "../filter.js";
import { Append_Car_Card } from "./car.js";

const Checkbox_ID = "checkboxes";

export function Setup_Checkbox_Grid()
{
    let Checkbox_Container = document.getElementById(Checkbox_ID);

    let Column_Size = (innerWidth / 6) - 10;
    let Button_Width = innerWidth - (Column_Size * 6);
    Checkbox_Container.style.cssText =  `
                                    display: grid; 
                                    box-sizing: border-box;
                                    grid-row: 1 / span 1;
                                    grid-template-columns: repeat(6, ${Column_Size}px) ${Button_Width}px;
                                    grid-template-rows: repeat(1, 100%);
                                    `;

    let Filter_By = ["min-year", "max-year", "make", "mileage", "max-price", "color"];
    Append_Sections(Filter_By);
    Append_Button(Button_Width);

};

function Append_Button(Button_Width)
{
    let Checkbox_Button = document.createElement("BUTTON");
    Checkbox_Button.type = "button";
    Checkbox_Button.onclick = Apply_Filter;
    let Button_Text = document.createTextNode("Submit");

    Checkbox_Button.appendChild(Button_Text);
    document.getElementById(Checkbox_ID).appendChild(Checkbox_Button);
};

function Apply_Filter()
{
    var Hold_Checked_Checkboxes = []
    var Checked = document.querySelectorAll('input[type=checkbox]:checked')
    
    for (var Checked_Index = 0; Checked_Index < Checked.length; Checked_Index++) 
    {
        Hold_Checked_Checkboxes.push(Checked[Checked_Index].id)
    }

    let Cars_to_Append = Filter_By_Parameters(Hold_Checked_Checkboxes);
    Remove_Cars();
    Append_Cars_Meeting_Requirements(Cars_to_Append);
};

function Remove_Cars()
{
    let Parent_Element = document.getElementById("showcase-cars");
    while (Parent_Element.firstChild) 
    {
        Parent_Element.firstChild.remove();
    };
};

function Append_Cars_Meeting_Requirements(Cars_to_Append)
{
    Cars_to_Append.map(Append_Car_Card);
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