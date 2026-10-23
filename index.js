let nuovoArray = [1, 2, 3, 4];
// passaggio del valore array per riferimento o dato

function sommaArray(arr) {
    if(arr != undefined){
        for(let i = 0; i<arr.length; i++) {
            nuovoArray[i] += i;
        }
    }
}

console.log(nuovoArray);
sommaArray(nuovoArray);
console.log(sommaArray);
console.log(nuovoArray);

console.log(sommaArray());
