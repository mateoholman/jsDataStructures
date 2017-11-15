console.log(
  'JavaScript has a built-in Map() function, which is fundamentally a hash table.'
);
console.log('We will create a new Map() and add some key value pairs');
let myMap = new Map();
myMap.set('1', 'Matt Holman');
myMap.set('2', 'Olive Holman');
myMap.set('3', 'Lina Holman');
console.log('After adding some key/value pairs, our Map() now contains:');
myMap.forEach(entry => console.log(entry));
