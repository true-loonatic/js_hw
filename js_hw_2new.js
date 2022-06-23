// 1 and 1*

for (let i = 1; i <= 10; i++){
    
    let a = Math.pow(2,i);
    console.log ('i= ', i, 'result= ', a);
};

// for (let i = 1; i <= 10; i++){
    
//     let a = 2 ** i;
//     console.log ('i= ', i, 'result= ', a);
// };

let extentionEdit = function(i){
    
    let n = 2 ** i;
    console.log ("Result = ", n);
}

extentionEdit(11);
extentionEdit(2);
extentionEdit(0);

//2
let printSmile = function(m,x){
    
    for (let s = 0; s <= x-1; s++){
    
           
        let n = [m, m+m, m+m+m, m+m+m+m, m+m+m+m+m]
        console.log(n[s])
}  
}

printSmile(":)", 5)
printSmile("test", 2)