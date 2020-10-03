// [1,2,3,4].forEach(function (i){
//     console.log(i);
// })

function asyncForEach(array, cb) {
    array.forEach(i => {
        setTimeout(cb, 0);
    })
}

asyncForEach([1,2,3,4], function(i){
    console.log(i);
})

// function asyncForEach(array) {
//     array.forEach(function(i){
//         setTimeout(function(i){
//             console.log(i);
//         }, 0);
//     })
// }

// asyncForEach([1,2,3,4])