/*1. var nestedData = {
innerData : {
    order : [ "first" , "second" , "third" ],
    snacks : [ "chips" , "fruit" , "crackers" ],
    numberData : {
    primeNumbers : [ 2 , 3 , 5 , 7 , 11 ],
    fibonnaci : [ 1 , 1 , 2 , 3 , 5 , 8 , 13 ]
    },
    addSnack : function (snack){
    this .snacks.push(snack);
    return this ;
    }
    }
    }*/

//Using a for loop, console.log all of the numbers in the primeNumbers array.
for(var i=0; i<nestedData.innerData.numberData.primeNumbers.length; i++){
    console.log(nestedData.innerData.numberData.primeNumbers[i]);
}

//Using a for loop, console.log all of the even Fibonnaci numbers.
var fibArray = nestedData.innerData.numberData.fibonnaci

for (var i = 0; i < fibArray.length; i++) {
    if(fibArray[i] % 2 === 0){
        console.log(fibArray[i])
    }
}

//Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order[1])


//Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack("Chocolate")

//Inside of the addSnack function there is a special keyword called this . Whatdoes the word this refer to inside the addSnack function?
