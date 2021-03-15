
/**
 * @param {string} data - The array of countries containing people containg animals.
 * @returns {array}
 */
const count = (data) => {
  return data.data.map(country => {
      const people = country.people.map(person => {
          return {
              name: `${person.name} [${person.animals.length}]`,
              animals: person.animals, 
          }});
      return {
          name: `${country.name} [${people.length}]`,
          people,
      };    
  });
}

module.exports = count;

