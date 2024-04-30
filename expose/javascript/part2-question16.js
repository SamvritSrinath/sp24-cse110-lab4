let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

/**
 * This code block prints out the values of the object properties in the statistics object if the property name starts with the letter 'r' or if the value of the property is an odd number.
 */

for (const property in statistics) {
    if (property.startsWith('r') || statistics[property] % 2 !== 0) {
        console.log(statistics[property]);
    }
}