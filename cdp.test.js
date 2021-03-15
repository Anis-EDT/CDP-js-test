const { expect, test } = require('@jest/globals');
const filter = require('./filter');
const count = require('./count');
const data = require('./data');


test('filter', () => {
  const pattern = 'ry';
  const filteredArray = filter(data, pattern);
  const animals = filteredArray.flatMap(country => {
    const localAnimals = country.people.flatMap(person => {
        return person.animals
      });
    return localAnimals;
  });

  animals.forEach(animal => {
    expect(animal.name.includes(pattern)).toBeTruthy();
  });
});

test('count', () => {
    const result = count(data);  
    result.forEach(country => {
      // Test on country
      expect(Number(country.name[country.name.length - 2])).toEqual(country.people.length);

      // Test on people
      country.people.forEach(person => {
        expect(Number(person.name[person.name.length - 2])).toEqual(person.animals.length);
      })
    })
  });

