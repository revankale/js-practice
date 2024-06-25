// primitive data type - string, number, boolean, null, undefined, symbol, BigInt...etc

const score = 100;
const scoreValue = 103.3;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

const id = Symbol('123');

const anotherId = Symbol('123');

// console.log(id === anotherId );

// const bigNumber = 124848435835n



// Referance (non-primitive) data type - Array, Object, function


const hero = ["shaktiman", "nagraj", "dogo"];

let myObj = {
    name: "revan",
    age: 28

}

const myFuction = function(){
    // console.log("hello world");
}

// console.log(typeof scoreValue);

//***************************************************************** */

// memory type 

// stack (primitive) , Heap(non-primitive)

let myYoutubeChannel = "revankale";

let anotherName = myYoutubeChannel;

anotherName = "chai or code"

console.log(anotherName);
console.log(myYoutubeChannel);

let userOne = {
    email: "user@gmail.com",
    upi: "userUpi@ybi"
}

let userTwo = userOne;

 userTwo.email = "revankale@gmail.com";

 console.log(userOne.email);
 console.log(userTwo.email);
