// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Riya",
    "full name":"Riya Chaudhari",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "riya@google.com",
    isLooggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser[mySym])

JsUser.email = "riya@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "riya@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());