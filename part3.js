/*Write a function called rotate which takes an array and a number, and moves
each element however many spaces the number is to the right. For the value at the
end of the array, rotate should move it back to the beginning.
rotate([ 1 , 2 , 3 ], 1 ) // [3,1,2]
rotate([ 1 , 2 , 3 ], 2 ) // [2,3,1]
rotate([ 1 , 2 , 3 ], 3 ) // [1,2,3] */

function rotate(arr, num){
    var count = num % arr.length;
    for(var i=0; i< count; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}

/*Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray,equal to the columns parameter and the number of subarrays equal to the rows
parameter. The values in the sub-arrays should switch between "X" and "O"*/
function makeXOGrid(rows,count){
    var finalArr = []
    var startWithX = true
    for(var i=0; i<rows; i++){
        var newRow = []
        for(var j=0; j<count; j++){
            if(startWithX){
                newRow.push("X")
            }
            else {
                newRow.push("O")
            }
            startWithX = !startWithX
        }
        finalArr.push(newRow)
    }
    return finalArr;
}