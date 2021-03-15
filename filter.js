/**
 * @param {string} data - The array of countries containing people containg animals.
 * @param {string} pattern - The pattern which will filter the array.
 * @returns {array}
 */
const filter = (data , pattern) => {
    // FlatMap is being used to avoid returning empty arrays
    const FilteredArray =  data.data.flatMap(country=> {
            const filteredPeople =   country.people.flatMap(person => {
                const filteredAnimals = person.animals.filter(s => s.name.includes(pattern)) ;
                return filteredAnimals.length > 0 ? { name : person.name , animals : filteredAnimals } : []
            })
            return  filteredPeople.length > 0 ? {name : country.name , people :filteredPeople  } : []
    }) 
    return  FilteredArray.length > 0 ? FilteredArray : null
};

module.exports = filter;
