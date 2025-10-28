console.log("ciao");

//Create a program to give output the multiplication of numbers from 1 to 10

let res = 0; //x is my multiplication result

//nested loop for
for(i = 1; i <= 10; i++){
    for(j = 1; j <= 10; j++){
        res = i * j;
        console.log(`${i} * ${j} = ${res}`);
    } 
}