import { Capitalize_First_Letter } from "./utility";

const Root_Div = "showcase-cars";

export function Setup_Car_Grid()
{
    let Grid_Container = document.getElementById(Root_Div);
    let Column_Size = innerWidth / 5;
    let Row_Size = innerHeight / 3;
    Grid_Container.style.cssText =  `
                                    display: grid; 
                                    box-sizing: border-box;
                                    grid-row: 2 / span 1;
                                    grid-template-columns: repeat(5, ${Column_Size}px);
                                    grid-template-rows: repeat(3, ${Row_Size}px);
                                    `;
};

export function Append_Car_Card(Car_Model)
{
    let Car_Element = document.createElement("section");
    let Car_Model_With_Dash = Car_Model["model"].replace(/ /g,"-");
    let Element_ID = `${Car_Model["make"]}-${Car_Model_With_Dash}-${Car_Model["year"]}`;
    Car_Element.setAttribute("id", Element_ID);
    Car_Element.style.cssText = `
                                    display: grid; 
                                    grid-template-columns: 100%;
                                    grid-template-rows: 44% repeat(7, 8%);
                                `;

    document.getElementById(Root_Div).appendChild(Car_Element);

    Append_Car_Image(Element_ID);
    Append_Car_Info(Element_ID, Car_Model);
};

function Append_Car_Image(Element_ID)
{
    let Car_Image = document.createElement("img");
    Car_Image.src = '../static/img/car.jpg';
    document.getElementById(Element_ID).appendChild(Car_Image);
};

function Append_Car_Info(Element_ID, Car_Model)
{
    for (let [key, value] of Object.entries(Car_Model)) 
    {
        let Paragraph_Element = document.createElement("p");
        Paragraph_Element.style.fontSize = "14px";


        var Capitalized_Word = Capitalize_First_Letter(key); 
        if (Capitalized_Word == "GasMileage")
        {
            Capitalized_Word = "Gas Mileage";
        };

        let Car_Info = `${Capitalized_Word}: ${value}`;
        let Car_Info_Element = document.createTextNode(Car_Info);
    
        Paragraph_Element.appendChild(Car_Info_Element);
        document.getElementById(Element_ID).appendChild(Paragraph_Element);
    };

};