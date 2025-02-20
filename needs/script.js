// fundamentals of javascrpt 
// array and objects
// function return 
// async js coding

var arr = [1,2,3]
// foreach 
arr.forEach(function(val){
    console.log(val + "hello")
})
// map 
var arr1 = [1,2,3,4]
var ans = arr1.map(function(val){
    return 13+val;
})
console.log(ans)
// filter 
var arr2 = [1,2,3,4,5,6,7,8,9]
var filter = arr2.filter(function(val){
    if(val > 3) {return true;}
    else return false;
})
console.log(filter)
// find 
var arr3=[1,2,2,3,3,4]
console.log(arr.find(function(val){
    if (val === 2) return val;
}))
// indexof
console.log(arr.indexOf(4))

