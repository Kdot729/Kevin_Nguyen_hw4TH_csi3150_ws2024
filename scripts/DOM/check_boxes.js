const Checkbox_ID = "checkboxes";

export function Setup_Checkbox_Grid()
{
    let Button_Container = document.getElementById(Checkbox_ID);
    let Column_Size = innerWidth / 7;
    Button_Container.style.cssText =  `
                                    display: grid; 
                                    box-sizing: border-box;
                                    grid-row: 1 / span 1;
                                    grid-template-columns: repeat(7, ${Column_Size}px);
                                    grid-template-rows: repeat(1, 100%);
                                    `;
};

export function Append_Buttons()
{
    
    let Filter_By = ["min-year", "min-year", "make", "model", "mileage", "price", "color"];
};