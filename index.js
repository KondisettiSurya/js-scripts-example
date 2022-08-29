// console.log("hello world");

// //variables

//  name:'surya';
// console.log(name);



//------------------------------------------------------------------------------------------
//operator

// username=prompt('Enter the username');
// password=prompt('Enter the password');
// console.log(username);
// console.log(password);
// alert('entered username : '+username +'entered password : '+password);


//-----------------------------------------------------------------------------------------

//operator

// food=Number(prompt('enter the food amount?'));
// tippercentage=Number(prompt('tip %?')) /100;
// finalamount=food*tippercentage;
// console.log(finalamount);
// alert(finalamount);

//------------------------------------------------------------------------------------------

//operator
//add +, sub -, multi *, modu %, exponents **, div /


//--------------------------------------------------------------------------------------------

//Math methods- m should be captial
//floor -method to round down the things like floor(100.25)=100
//celi - method to round up the things like celi(100.25)=101
//random - method to pickup the numbers randomly


//-----------------------------------------------------------------------------------------

// we use var, let, const for variable declaration
// var is not recommend
// let used for all variables
// const is to primary variable where we doesnt make changes

//------------------------------------------------------------------------------------------

//conditional operators
//===, ==, <, >, =>, <=, !=, !==

//------------------------------------------------------------------------------------------

//functions

// function myname(name){
//     console.log(name);
// }
//  myname('krishna');

//dynamic with user inference

// function  myname1(name){
//     console.log('Hi '+name+' , Nice to meet u');
// }
 
// myname1(prompt('enter the username'));

//----------------------------------------------------------------------------------------------

//template literals

// function  myname1(name){
   
//     //  " `` " use ESC below button
//     greet=`Hi ${name} , Nice to meet u`

//     console.log(greet);
//     alert(greet);
// }
 
// myname1(prompt('enter the username'));


// add 


// function sum(num1,num2){
//     return  num1+num2
// }
 

// num3=sum(10,20);
//  console.log(num3);


//------------------------------------------------------------------------------------------

// function sum(a,b){
// return a+b    
// }

// function calculatefood(food,tip){
// const tippercentage= tip / 100;
// const finalamount=food*tippercentage;
// const total=sum(food,finalamount);
// return total;
// }

// console.log(calculatefood(300,20));


//------------------------------------------------------------------------------------------

//Arrow function

//arrow function with explicit return

// const sumArrow=(a,b) =>{
//     return a+b;
// }

// arrow function with implicit return


// const sum=(a,b) => a*b;

// console.log(sum(10,20));


//-----------------------------------------------------------------------------------------------

// Arrays

// let grociers=['🍎','🍌','🍊','🍍']

// console.log(grociers);
// console.log(grociers[0]);
// console.log(grociers[1]);
// console.log(grociers[2]);
// console.log(grociers[3],grociers[2]);

//slice

//it will pstart from 0-3

// console.log(grociers.slice(0,3));


// to add new items into array we use push

//  grociers.push('🍉');
//  console.log(grociers);
 
 // to remove the items from the array we use pop

//  grociers.pop();
//  console.log(grociers);
//  grociers.pop();
//  console.log(grociers);

// to know the index

// console.log(grociers.indexOf('🍌'));

// to know the length of array 

// console.log(grociers.length);

//-------------------------------------------------------------------------------------------


// Objects

// let person= {
//     name:'surya',
//     address:'rajendra nagar'
// }


// this is dot notation

// console.log(person.name,person.address);//single line

// console.log(person.address);//different line



//this is bracket notation

// console.log(person['name']);


//assign data to person

// person.phone='9154612347'
// console.log(person['phone']);


//                                example

// const introducer=(name,address,phone) => {

//     let person={
//       name:prompt('enter the name'),
//       address:prompt('enter the address'),
//       phone:prompt('enter the phone number'),
                
//     }
   
//     intro=`Hi myself ${person.name} I live in ${person.address}, my mobile is ${person.phone}`;
//      return intro;
// }


// console.log(introducer(person.name,person.address,person.phone));
// alert(`Hi myself ${person.name} I live in ${person.address}, my mobile is ${person.phone}`);

//------------------------------------------------------------------------------------------

//                                    Loops


 // for  Loop

//  let grociers=['🍎','🍌','🍊','🍍'] 

//  for(let i=0; i<grociers.length; i++){

//     console.log(grociers[i]);
//  }


// let numbers=[1,2,3,4,5,6]

// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// another method 
// for(let number of numbers){
//     console.log(number * 2 );
// }

// let howmanywords=(phrase)=>{

//     let result =0;

//     for(let index in phrase){
//      console.log(Number(index) + 1)
//     result= Number(index) + 1

//     }
// return {result}
    
// }
// let phrase=prompt('enter the numbers of words')
//    console.log(howmanywords(phrase));


