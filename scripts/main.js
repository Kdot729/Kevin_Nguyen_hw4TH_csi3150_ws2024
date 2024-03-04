import usedCars from "./usedCars.js";

usedCars.map(Iterate_Car_Models)


function Iterate_Car_Models(Car_Model)
{
    let Car_Element = document.createElement("section");
    let Car_Model_With_Dash = Car_Model["model"].replace(/ /g,"-");
    let Class_Name = `${Car_Model["make"]}-${Car_Model_With_Dash}-${Car_Model["year"]}`;
    Car_Element.classList.add(Class_Name);
    document.getElementById("showcase-cars").appendChild(Car_Element);
};


