for(let i = 1 ; i< 11 ; i++){
    console.log(i);
    
}

let i = 10;
while(i>0){
    console.log(i);
    i--;
}

for(let i = 1 ; i<=20 ; i++){
    if(i%2===0){
        console.log(i);
    }
}

let j = 1 ;
while(j<=15){
    if(j%2!=0){
        console.log(j);
    }
    j++;
}

for(let i = 1 ; i<=10 ; i++){
    console.log(`5*${i}=${5*i}`);
    
}

let sum = 0 ; 
for(let i = 1 ; i<=100 ; i++){
    sum+=i;
}
console.log(sum);

for(let i = 1 ; i<= 50 ; i++){
    if(i%3==0){
        console.log(i);
    }
}

let input = parseInt(20);
for(let i = 1 ; i<= input ; i++){
    if(i%2===0){
        console.log(i , " is even");
    }else{
        console.log(i , " is odd ");
        
    }
    
}

let input = prompt("Enter a number : ");
for(let i = 1 ; i<= input ; i++){
    if(i%2===0){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
        
    }
}



for(let i = 1 ; i<= 100 ; i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}

