import usedCars from "./usedCars.js";

usedCars.map(Iterate_Car_Models)


function Iterate_Car_Models(Car_Model)
{
    let Car_Model_Element = document.createElement("section");
    document.getElementById("showcase-cars").appendChild(Car_Model_Element);
};


