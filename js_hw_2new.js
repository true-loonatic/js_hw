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
};

extentionEdit(11);
extentionEdit(2);
extentionEdit(0);

//2

let printSmile = function(m,x){
    
    for (let s = 0; s <= x; s++){
    
           
        let n = m;
        console.log(n.repeat(s));
};  
};
printSmile(":)", 5);
printSmile("test", 2);
printSmile("test1", 3);

//3

let z = ['a','e','i','o','u', ];
let p = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z', ];
let c = 0;
let t = 0;

function getWordStructure(w){
    
    for (let v = 0; v <= w.length; v++){
        w = w.toLowerCase();
        

        if (z.indexOf(w[v]) !== -1){
            c++;
        }
        if (p.indexOf(w[v]) !== -1){
            t++;
        };   
    };
    
    console.log(c , t);

};
getWordStructure('Check-List');

// 4

function  isPalindrom(word){
    word = word.toLowerCase();
    
    for (let r = 0; r <= word.length/2; r++){
        
        if (word[r] !== word[word.length - r - 1]){
            return false;
       
        };
        
    };
    return true;
      
};

console.log(isPalindrom ("abba"));