var a=10;
console.log(a);
function demo(){
    let b=20;
    console.log(b);
}
demo();
let user = {
    name: "prachi",
    age: 19,
    address:{              //nested object
        city: 'gurugram',
        state: 'haryana',
    },
    mobile: 1234567890,
    favcolor: ["blue", "pink"],
    demo: function(){
        return "hello world";
    }
};
console.log(user);
console.log(user.name,user.favcolor[1],user.address.city,user.demo());

console.log("my name is " + user.name + " and my age is " + user.age + "my favourite color is " + user.favcolor[1] + "i live in " + user.address.city);
//string literal
console.log(`my name is ${user.name}.my age is ${user.age}. my favourite color is ${user.favcolor[0]}`);

//object methods
//to access all keys of object
Object.keys(user);
console.log(Object.keys(user));
//to access all values of object
console.log(Object.values(user));
//to access both keys and values
console.log(Object.entries(user));
//in APIs we need above for conversion of data into JSON format

const car = {
     make: "Mahindra", 
     model: "Thar" 
};
//important revise again
Object.freeze (car); //prevents modification of object
car.model = "XUV";      //will not work
car.year = 2020;   //will not work
console.log(car);               
//output: { make: 'Mahindra', model: 'Thar' }

Object.seal(car); //allows modification but not addition or deletion
car.model = "XUV";      //will work         
car.year = 2020;   //will not work
console.log(car);
//output: { make: 'Mahindra', model: 'XUV' }


