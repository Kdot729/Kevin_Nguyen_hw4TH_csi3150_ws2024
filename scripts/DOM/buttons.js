export function Setup_Button_Grid()
{
    let Button_Container = document.getElementById("filter-buttons");
    let Column_Size = innerWidth / 5;
    Button_Container.style.cssText =  `
                                    display: grid; 
                                    box-sizing: border-box;
                                    grid-row: 1 / span 1;
                                    grid-template-columns: repeat(5, ${Column_Size}px);
                                    grid-template-rows: repeat(1, 100%);
                                    `;
};

export function Append_Buttons()
{
    let Button_IDs = ["year-button", "make-button", "model-button", "mileage-button", "price-button", "color-button"];
};