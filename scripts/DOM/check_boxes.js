export function Setup_Button_Grid()
{
    let Button_Container = document.getElementById("check-boxes");
    let Column_Size = innerWidth / 6;
    Button_Container.style.cssText =  `
                                    display: grid; 
                                    box-sizing: border-box;
                                    grid-row: 1 / span 1;
                                    grid-template-columns: repeat(6, ${Column_Size}px);
                                    grid-template-rows: repeat(1, 100%);
                                    `;
    Append_Buttons();
};

export function Append_Buttons()
{
    let Button_IDs = ["year-button", "make-button", "model-button", "mileage-button", "price-button", "color-button"];

    for (let Index = 0; Index < Button_IDs.length; Index++) 
    {
        Button_Element.type = "button";
        Button_Element.setAttribute("id", Button_IDs[Index]);
        document.getElementById("check-boxes").appendChild(Button_Element);
    };
};