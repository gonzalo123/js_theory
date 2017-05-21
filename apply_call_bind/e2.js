// apply is the same. The only difference is that we pass arguments as an array

var user = {
    greet: "Hello",
    greetUser: function(userName) {
        console.log(this.greet +  " " + userName);
    }
};

var greet1 = {
    greet: "Hola"
};

user.greetUser("Gonzalo"); // returns "Hello Gonzalo"
user.greetUser.call(greet1, "Gonzalo"); // returns "Hola Gonzalo"
user.greetUser.apply(greet1, ["Gonzalo"]); // returns "Hola Gonzalo"