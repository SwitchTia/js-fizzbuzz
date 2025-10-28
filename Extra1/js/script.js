// Exercise: Number Replacer
// 📝 Instructions

// Write a program that prints numbers from 1 to 100, with these rules:

// For numbers divisible by 4, print "Quad".

// For numbers divisible by 6, print "Hex".

// For numbers divisible by both 4 and 6, print "QuadHex".

// For numbers that end with 0, print "ZeroEnd".

// For all other numbers, print the number itself.

for(let i = 1; i <= 100; i++){
    if( i % 4 === 0 && i % 6 === 0){
        console.log("QuadHex");
    }
    else if( i % 4 === 0){
        console.log("Quad");
    }
    else if( i % 6 === 0){
        console.log("Hex");
    }
    else if( i % 10 === 0){
        console.log("ZeroEnd");
    }
    else{
        console.log(i);
    }
}