export function Setup_Grid()
{
    let Grid_Container = document.getElementById("showcase-cars");
    let Column_Size = innerWidth / 5;
    let Row_Size = innerHeight / 3;
    Grid_Container.style.cssText =  `
                                    display: grid; 
                                    width: 100%;
                                    height: 100%;
                                    grid-template-columns: repeat(5, ${Column_Size}px);
                                    grid-template-rows: repeat(3, ${Row_Size}px);
                                    `;
};

export function Iterate_Car_Models(Car_Model)
{
    let Car_Element = document.createElement("section");
    let Car_Model_With_Dash = Car_Model["model"].replace(/ /g,"-");
    let Element_ID = `${Car_Model["make"]}-${Car_Model_With_Dash}-${Car_Model["year"]}`;
    Car_Element.setAttribute("id", Element_ID);
    Car_Element.style.cssText = `
                                    display: grid; 
                                    width: 100%;
                                    height: 100%;
                                    grid-template-columns: 100%;
                                    grid-template-rows: 44% repeat(7, 8%);
                                `;

    document.getElementById("showcase-cars").appendChild(Car_Element);

    let Car_Image = document.createElement("img");
    Car_Image.src = '../static/img/car.jpg';
    document.getElementById(Element_ID).appendChild(Car_Image);
};