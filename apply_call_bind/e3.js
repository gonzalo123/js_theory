// bind allow us to pass arguments to a function without invoing it

var user = {
    greet: "Hello",
    greetUser: function(userName) {
        console.log(this.greet + " " + userName);
    }
};

var greetHola = user.greetUser.bind({greet: "Hola"});
var greetKaixo = user.greetUser.bind({greet: "Kaixo"});

greetHola("Gonzalo"); // returns "Hola Gonzalo"
greetKaixo("Gonzalo"); // returns "Kaixo Gonzalo"
