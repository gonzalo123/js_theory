// call: invokes a function specifying its context

var user = {
    name: "Gonzalo Ayuso",
    whatIsYourName: function() {
        console.log(this.name);
    }
};

user.whatIsYourName(); // returns "Gonzalo Ayuso"

var user2 = {
    name: "Peter Parker"
};

user.whatIsYourName.call(user2); // returns "Peter Parker"