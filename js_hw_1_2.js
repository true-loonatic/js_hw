// let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

let age = function(age_1){
if (age_1 < age_2){
    console.log("You don't have access cause your age is " + age_1 + " it's less then " + age_2);
}else if (age_1 >= age_2 , age_1 < age_3){
    console.log("Welcome !");
}else if (age_1 > age_3){
    console.log("Keep calm and watch Culture channel");
}else{
    console.log("Technical work");
};
};
age (15)