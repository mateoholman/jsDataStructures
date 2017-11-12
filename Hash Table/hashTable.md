# Hash table

Time Complexity:
look-up: O(1)
insertion: O(1)

# Description:
A hash table provides constant time O(1) run time for look-up & insertion.
Simply put, a hash table is an array with a hash function.

# Implementation:
A hash table needs to have the following methods / properties:
- One
- Two
- Three

# JS Built In:
JavaScript has a built-in Map() function, which is fundamentally a hash table.

You can create a new hash table using the new operator:
``` JavaScript
let myMap = new Map();
```

Map() has the following methods:
- clear() - Removes all key/value pairs from the Map object.
- delete(key) - Returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
- entries() - Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
- forEach(callbackFn) - Calls callbackFn once for each key-value pair present in the Map object, in insertion order.
- get(key) - Returns the value associated to the key, or undefined if there is none.
- has(key) - Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
- keys() - Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
- set(key, value) - Sets the value for the key in the Map object. Returns the Map object.
- values() - Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
