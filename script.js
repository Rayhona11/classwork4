console.log(".h1");

//?Outputs
//console.log(5)
//document.write("Hello")

//alert("this is warning")

//let headOne = document.querySelector("h1")

//headOne.innerHTML="this is headOne"


//
// alert("sahifaga Kirdingiz")

//let firstNumber =+prompt("birinchi sonni kiriting")
//let operation = prompt("Operatsiyani Kiriting + - * /")

//let secondNumber =+prompt("ikkinchi sonni kiriting")

//let result;

//if( operation == "+") {

  //  result = firstNumber + secondNumber
//}
 //else if (operation == "-"){

   // result = firstNumber - secondNumber
 //}

 //else if (operation == "*"){
    
 //   result = firstNumber * secondNumber
 //}

 //else if (operation == "/"){
    
 //   result = firstNumber / secondNumber
 //}
 //else {
   // alert("error")
 //}

 //if (result != undefined){
   // alert("The result is " + result)
 //}

// let demo = confirm("Yoshingiz 18 dan kattami")

 console.log(demo);

 if (demo ==true){
    console.log("dostup bor");
 }

 
 
 
 
 //?Variables

 var age = "salom"
 var age ="alek"

 console.log(age);

 let surname = "Muradov"

 let surnames = "Ashurov"

 //var global scope 
 
 if (true ){
    //blocked scope 
    var  demo = "some info"
    let test = "this is let"

    let surname = "Botirov"
 }


 let name ="Shaxzod"

  name = "Bekzod"

  console.log(name);

  let headOne = document.querySelector('h1')
  let minus = document.querySelector(".minus")
  let plus = document.querySelector(".plus")
  let num = 5;
  headOne.innerHTML = num;

  plus.addEventListener('click',()=>{
    num +=1
    headOne.innerHTML = num;
  })


  minus.addEventListener('click',()=>{
    num -=1
    headOne.innerHTML = num;
  })

  const weight = 75;

  weight =90;

  console.log(weight);