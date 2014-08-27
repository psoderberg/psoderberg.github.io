// GPS 1.2 - JavaScript

// YOUR FULL NAMES FIRST:
//  1. Daniel
//  2. Peter


// 0. "YOU SIGNED... WHO?!"




// 1. "Here they Come!"





// 2. "TIME IS MONEY!"

//YOUR CODE HERE!


var jackNicholson = { name: "Jack Nicholson", age: 77, quote: "Here's Johnny!"};
var alPacino = { name: "Al Pacino", age: 74, quote: "Say hello to my little friend!"};
var adamSandler = { name: "Adam Sandler", age: 47, quote: "That's your home! Are you too good for your home"};

var kristen = new Object();
kristen.name = "Kristen Bell";
kristen.age = 33;
kristen.quote = "Do you wanna build a snowman?";

var jimCarrey = {};
jimCarrey.name = "Jim Carrey";
jimCarrey.age = 52;
jimCarrey.quote = "...So you're telling me there's a chance? YEAH!";

//declare new client function that accepts aguments (objentName, age, name, quote
//the funciton will create an object with the name the user gives it
//the function makes properties and assigns them values
//properties are name age quote


function Client(name, age, quote){
    this.name=name;
    this.age=age;
    this.quote=quote;
}
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
//shooterMcGavin.constructor === Client;
//shooterMcGavin.age === 48;
//shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 3. "SHOW 'EM OFF!"

// create a new array, then push all the client Objects into it
// for loop to iterate from the first to the last index
// for each client, put their values in a nice sounding string

var clientsList = [jackNicholson, alPacino, adamSandler, kristen, jimCarrey, shooterMcGavin];

for (i = 0; i < clientsList.length; i++) {
 console.log("This is my client " + clientsList[i].name + ", who is " + clientsList[i].age + " years old, do you remember the line \"" + clientsList[i].quote + "\"?");
};

for (i = 0; i < clientsList.length; i++) {
    clientsList[i].quirk = "quirky";
}

// 4. "But wait, there's more!"
//pick a client, give him a new property called showQuote
//value of showQuote will be function that displays his quote

jackNicholson.showQuote = function (){
    console.log (this.quote);}


// 5.  ** BONUS **
//make a variable youngestStar = ""

//"console.log ("I hear you like them young.  My youngest client is" youngestStar.name "

//for loop that iterates over clients list
//it will check if each client's age is less than the current youngest age
//if true, set youngest age to current client
//print creepy statement
var youngestName = "";
var youngestAge = 1000;
for (i = 0; i < clientsList.length; i++) {
    if (clientsList[i].age < youngestAge) {
        youngestAge=clientsList[i].age;
        youngestName=clientsList[i].name;
        }}
console.log ("I hear this town likes them young.  My youngest client is " + youngestName + " at " + youngestAge + " years young.")


//  6.  Your Reflection:

This was a fun project.  It helped solidify the importance of pseudocode to help guide the project.  But having this as a GPS was also useful, since Emily jumped in a few times when we were heading down a path that probably would have worked, but only after much frustration.  We learned a few different ways to declare variables, and improved as we went along.
