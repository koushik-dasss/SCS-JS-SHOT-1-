// for(let i = 1 ; i<=100 ; i++){
//     console.log(i);
//      if(i%7===0){
//         break;
//     }
// }

for(let i = 1 ; i<=20 ; i++){
    if(i%3===0){
        continue;
    }
    console.log(i);
}
let ctr = 0 ; 
for(let i = 1 ; i<= 100 ;i++){
    if(i%2!==0){
        console.log(i);
        ctr++;
    }else{
        continue;
    }
    if(ctr===5){
        break;
    }
}