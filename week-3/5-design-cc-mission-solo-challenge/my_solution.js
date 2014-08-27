//reflection
This was a fun challenge.  At first, I set out to make something way too complicated.  I'm glad I dialed down my goals a little, so I could focus on learning to manipulate a few JS objects rather than banging my head against a wall.  In the end, I went with a radically simple mission but got more out of it for picking it up facilely.  This also helped me focus on improving my recall of syntax.




// codecombat mission
//protagonist, Tharin, moves to magic flute, picks up magic flute,
//carries it to antagonist, Antagony, plays flute to put antagonist to sleep,
//travels to  goal

//locations are start, flute, enemy, goal
//players are Tharin and Antagony
//other object are signs and flute,



//Tharin gets mission from the sign

function wheres(obj) {
 console.log("You're at "+obj.location);
}

function goTo(place) {
 tharin.location=(place);
 console.log("You're at "+tharin.location);
}

function pickUp(player, obj) {
 player.isCarrying=(obj);
 console.log("You have the "+player.isCarrying);
}

function playsThe(player, obj) {
 console.log("You played the "+player.isCarrying);
 console.log("Nearby enemies are asleep");
}

var sign = {
    start:"Go play the flute to get past Antagony!",
    end:"You Win!!",
};

var tharin = {
    name:"Tharin",
    isCarrying:{},
    location: "Start"
};


wheres(tharin);


console.log(sign.start);

//tharin moves to flute


goTo("flute");

//Tharin picks up flute

pickUp(tharin, "flute");


//Tharin moves to antagonist

goTo("enemy");

//tharin plays flute
//flute puts antagonist to sleep

playsThe(tharin, "flute");

//Tharin goes to goal

goTo("goal");

//Tharin wins

console.log(sign.end)