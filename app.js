var x = '{"name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse(x);
document.getElementById('demo').innerHTML = obj.name;

simple JSON

var x, txt, obj, myObj, myJSON;
obj = {name:'John', age:22, city:'New York'};
myJSON = JSON.stringify(obj);
localStorage.setItem('x', myJSON);

Retriving data 
txt = localStorage.getItem('x');
myObj = JSON.parse(txt);
document.getElementById('demo').innerHTML = myObj.name;

Storing data in local storage

var x = {name:'John', age:22, city:'New York'};
var obj = x.name;
document.getElementById('demo').innerHTML = obj;

You can access a JavaScript object like this:

var x = {name:'John', age:11, city:'Ohio!'};
var obj = x['name'] + '<br>' + x['city'];
document.getElementById('demo').innerHTML = obj;

 Access a JavaScript object using the bracket notation:

var x = {name:'Sunny Leone!', age:32, city:'Mumbai'};
x.name = 'Urvorsi Ratela?';
document.getElementById('demo').innerHTML = x.name;

Modify a JavaScript object:

var x = {name:'Sunny Leone', age:32, city:'Mumbai'};
x.name = 'Asha!';
x['name'] = 'Urvorsi Ratela';
document.getElementById('demo').innerHTML = x.name;

Modify a JavaScript object in two way spacify;

var obj = JSON.parse('{"name":"John", "age":22, "city":"New York"}');
document.getElementById('demo').innerHTML = obj.name + '<br>' + obj.age;

JavaScript function JSON.parse()
to convert text into a JavaScript object

var x = '{"name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse(x);
document.getElementById('demo').innerHTML = obj.name + '<br>' + obj.city;

Create Object from JSON String

var txt = '{"name":"John", "birth":"1999-05-03", "city":"New York"}';
var obj = JSON.parse(txt);
obj.birth = new Date(obj.birth);
document.getElementById('demo').innerHTML = obj.name + '<br>' + obj.birth;

Convert a string into a date object.

var txt = '{"name":"John", "birth":"1999-11-06", "city":"New York"}';
var obj = JSON.parse(txt, function (key, val) {
    if (key == "birth") {
        return new Date(val);
    } else {
        return val;
    }
});

document.getElementById('demo').innerHTML = obj.name + '<br>' + obj.birth;

parameter is a function before returning the value.

var txt = '{"name":"John", "age":"function () {return 30}", "city":"New York"}';
var obj = JSON.parse(txt);
obj.age = eval("(" + obj.age + ")");

document.getElementById('demo').innerHTML = obj.name + "<br>" + obj.age();

Convert a string into a function.

var obj = { name:"John", age:22, city:"Ohio!" };
var x = JSON.stringify(obj);
document.getElementById('demo').innerHTML = x;

JSON string from a JavaScript object.

var arr = ["saab", 'audi', "ford", 'volvo'];
var x = JSON.stringify(arr);
document.getElementById('demo').innerHTML = x;

JSON string from a JavaScript array.

var obj = { name:'John', age:22, today: new Date(), city:"Ohio!" };
var x = JSON.stringify(obj);
document.getElementById('demo').innerHTML = x;

JSON.stringify will convert any date objects into strings.

var obj = {name:'John', age:function() {return 30}, city:"Ohio!"};
var x = JSON.stringify(obj);
document.getElementById('demo').innerHTML = x;

JSON.stringify will remove any functions from an object
if i dosen't use string start the function

var hello = { name: "Jeff Bezo$", age: "function () {return 38}", city: "New york" };
var y = JSON.stringify(hello);
document.getElementById('demo1').innerHTML = y;

JSON.stringify will show any functions from an object
if i use string start the function

var obj = { name: 'John', age: function () { return 32 }, city: 'New york!' };
obj.age = obj.age.toString();
var x = JSON.stringify(obj);
document.getElementById('demo').innerHTML = x;

JSON.stringify will remove any functions from an object

var obj, x;
obj = { "name": "John", "age": 30, "car": null };
x = obj['name'];
document.getElementById('demo').innerHTML = x;
Access a JSON object using bracket notation:

var obj, x;
obj = {"name":"John", "age":32, car:null};
x = obj.name + " " + obj.age;
document.getElementById('demo').innerHTML = x;

Access a JSON object using dot notation:

var obj, x;
obj = { name: "John", age: 30, car: null };
for (x in obj) {

    document.getElementById('demo').innerHTML += x + '<br>';
}
loop through all properties in a JSON object.

var obj = {
    name: 'John',
    age: 30,
    car: {
        car1: 'Audi',
        car2: 'Ford',
        car3: 'Volvo',
    }
};
document.getElementById('demo').innerHTML = obj.car.car1;
document.getElementById('demo1').innerHTML = obj.car["car2"];

access nested JSON objects 
by using the dot notation or bracket notation

var obj = {
    name:"Herry_Potter!",
    age: 28,
    cars: {
        car1: 'saab',
        car2: 'audi',
        'car3': 'ferrari',
    }
}
document.getElementById('demo').innerHTML = obj.name + '<br>' + obj.cars.car1;
document.getElementById('demo1').innerHTML = obj.cars['car2'] + '<br>' + obj.cars.car3;

var obj, txt, x;
obj = {
    name: 'John',
    age: 32,
    city: 'Ohio!',
    cars: {
        car1: 'ferrari',
        car2: 'Jaguar',
        car3: 'saab'
    }
};

obj.cars.car2 = 'Audi';
obj.cars["car3"] = "Jaguar";

txt = "";

for (x in obj.cars) {
    txt += obj.cars[x] + '<br>';
}

document.getElementById('demo').innerHTML = txt;
modify values in a JSON object.

var obj, x, txt;
obj = {
    "name": "John",
    "age": 21,
    "city": "New York",
    "cars": {
        "car1": "saab",
        "car2": "Volvo",
        "car3": "Ferrari"
    }
};

obj.cars["car3"] = "Jaguar";
delete obj.cars.car1;

txt = "";

for (x in obj.cars) {
    txt += obj.cars[x] + '<br>';
}

document.getElementById('demo').innerHTML = txt;

delete properties of a JSON object

var obj, x;
obj = {
    name: 'John',
    age: 2,
    cars: ['Audi', 'Saab', "volvo"]
}

var x = obj.cars[0];
document.getElementById('demo').innerHTML = x;

Access an array value of a JSON object.

var obj, x, txt;
obj = {
    name: 'John',
    age: 2,
    cars: ['Audi', 'Saab', "volvo"]
}

txt = '';

for (x in obj.cars) {
    txt += obj.cars[x] + '<br>';
}

document.getElementById('demo').innerHTML = txt;

Looping through an array using

var obj, x, txt;
obj = {
    name: 'John',
    age: 2,
    cars: ['Audi', 'Saab', "volvo"]
}

txt = '';

for (i = 0; i < obj.cars.length; i++) {
    txt += obj.cars[i] + '<br>';
}

document.getElementById('demo').innerHTML = txt;

Loopin through an array using a for loop

var obj, txt, x, i;
obj = {
    name: 'John',
    age: 21,
    city: 'Ohio!',
    cars: [
        { name: 'Audi', modle: ['Force', 'Fox', 'Fly'] },
        { name: 'Ford', modle: ['x3', 'x5', 'x7'] },
        { name: 'Ferrari', modle: ['Fe@', 'x!', 'Ajax'] },
    ]
};

txt = "";

for (x in obj.cars) {
    txt += "<h2>" + obj.cars[x].name + "</h2>";
    for (i in obj.cars[x].modle) {
        txt += obj.cars[x].modle[i] + '<br>';
    }
}

document.getElementById('demo').innerHTML = txt;

Looping through arrays inside arrays

var txt, obj, x;
obj = {
    name: 'John',
    city: 'Ohio!',
    cars: ['Audi', 'Ford', 'Ferrari'],
}

obj.cars[1] = 'Jaguar!';

txt = "";

for (x in obj.cars) {
    txt += obj.cars[x] + '<br>';
}

document.getElementById('demo').innerHTML = txt;

modify an array value of a JSON object

var txt, obj, x;
obj = {
    name: 'John',
    city: 'Ohio!',
    cars: ['Audi', 'Ford', 'Ferrari'],
}

obj.cars[1] = 'Jaguar!';
delete obj.cars[0];

txt = "";

for (x in obj.cars) {
    txt += obj.cars[x] + '<br>';
}

document.getElementById('demo').innerHTML = txt;

delete properties of an array.