// function sayhello(){
//     let user =prompt("What is your name")
//     alert(`Hello ${user}`);

// }
// sayhello();
// function cookRice(rice, salt, water){
//     alert(`I cooked ${rice} cups of rice with ${salt}  pinch of salt, with ${water} cups of water`);
// }

// cookRice("half", "5ooml", 10);

// let many =prompt("How many burgers would you like?");
//    let big =prompt("How big should the burger be?");

// function order(howmany, size){
//     alert(`you just orderd ${howmany} and ${size} burger`)
// }
// order(many, big);

function checkAge(){
let age =prompt("What is your age");

if(age && age > 6){
    alert(`you are ${age}years old and you are too young.`)

}else  if(age &&   age >= 6 && age <= 17){
    alert(`You are ${age} years old and you have limited options.`)
}

else if(age && age >=18){
                alert(`You are ${age} years old and you can have all options`)
    } 
    else{
        alert(`Enter an age please`);
    }
}

checkAge(age) 