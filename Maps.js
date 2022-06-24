//Map in JS will holds key-value pairs (where the keys & values can be any datatype)  
//Map remembers the original insertion order of the keys   'LET START LEARNING (:'

//In JS we create an MAP by --> Passing an Array into new Map()

const cloud= new Map([
['name','vignesh'],
['age', 25],
['location','pune'],
[123,'lucky number']
]);
console.log(cloud);

//Map methods 
//set() --> sets the value for an key  (like in set we add same but method changes)

const area= new Map([
['name','vignesh'],
['age', 25],
['location','pune'],
[123,'lucky number']
]);
area.set('pin code',624615);
console.log(area);

const place =new Map([
['school','aams'],
['where','cheenai'],
['address','171/158']
])
place.set('rank in cheemai',1);
console.log(place);

//get() --> Gets an value for an key
const storage = new Map([
['name','vignesh'],
['age', 25],
['location','pune'],
[123,'lucky number']
]);
console.log(storage.get(123));


const disk = new Map([
['name','vignesh'],
['born', 2001],
['location','pune'],
[123,'bad number']
]);
console.log(disk.get('born'));

//delete() --> remove an element specified by an key 

const hardrive = new Map([
['name','vignesh'],
['born', 2001],
['location','pune'],
[123,'bad number']
]);
hardrive.delete('location');
console.log(hardrive);

//clear() --> Remove all elements from an map.

const clean = new Map([
['pet','dog'],
['mobile','apple'],
['car','audi'],
[123,'car number'],
[true,'doing good']
]);
clean.clear();
console.log(clean);

//delete() --> Remove an map element specified by a key
//Remember  keys & values can be any datatype

const remove1 =new Map([
['name','john'],
['laptop','apple'],
[null,0],
[true,1],
[false,0]
]);
remove1.delete(null);
console.log(remove1);

//has() --> Return TRUE if element exsist in a map if not retun FALSE 
//Remember  keys & values can be any datatype

const have =new Map([
['name','vignesh'],
[null, 25],
['location',true],
[123,false]
]);
console.log(have.has(null));

const have1 =new Map([
['name','vignesh'],
[null, 25],
['location',true],
[123,false]
]);
console.log(have.has(321));

//keys() --> To get all keys in a map it shows all key in the map has output

const lock =new Map([
['name','vignesh'],
[null, 25],
['location',true],
[123,false],
[true,'what u did']
]);
console.log(lock.keys());

//values() --> Return all values in a map it shows all values in the map has output
const dead =new Map([
['name','vignesh'],
[25,true ],
['place',null],
[123,undefined]
]);
console.log(dead.values());

//entries() --> Return all key & value pairs in a map

const value1 =new Map([
['name','vignesh'],
[25,true ],
['place',null],
[123,undefined]
]);
console.log(value1.entries());

//Map property 
// size --> Return a size of the map has an output

const nine =new Map([
['name','vignesh'],
[null, 25],
['location',true],
[123,false],
[true,'what u did']
]);
console.log(nine.size);

//typeof map is an object 

let method ;
method =new Map([
[987,'last four digit ph number'],
[true,null],
[false,undefined]
]);
console.log(typeof(method));

//THANK YOU FOR LEARNING :)