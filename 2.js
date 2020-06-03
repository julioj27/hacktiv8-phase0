/*
==============
Favorite Color
==============

[INSTRUCTIONS]
Kita tahu bahwa warna dasar adalah: 'red', 'yellow', 'blue'
Pada sebuah panelis pemilihan warna, function akan me-return output warna terbanyak.
Apabila jumlah 'red' dalam array lebih besar dari jumlah 'yellow' dan 'blue', maka function akan mereturn "red the most favorite!".
Apabila jumlah 'yellow' dalam array lebih besar dari jumlah 'red' dan 'blue', maka function akan mereturn "yellow the most favorite!".
Apabila jumlah 'blue' dalam array lebih besar dari jumlah 'red' dan 'yellow', maka function akan mereturn "blue the most favorite!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!"

[RULE]
- Wajib menuliskan algoritma/pseudocode.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

//pseudocode here
/**
  * SET 'result' to empty string
  * SET 'temp' to empty object
  * SET 'highestFrequency' to zero(number)
  * SET 'mode' to empty string
  * IF length of input array is equal to zero THEN
  *   FOR each number in input array
  *     SET 'color' to number in input array
**/
function favoriteColor (input) {
  // your code here!
  var result = '';
  var temp = {};
  var highestFrequency = 0;
  var mode = '';
  if(input.length !== 0) {
    for(let i = 0; i < input.length; i++) {
      var color = input[i];
      if(temp[color] === undefined) {
        temp[color] = 1;
      } else {
        temp[color] += 1;
      }
    }
    // console.log(temp);
    for(var key in temp) {
      if(temp[key] > highestFrequency) {
        highestFrequency = temp[key];
        mode = key;
        result = `${mode} the most favorite!`;
      } else if(temp[key] === highestFrequency) {
        result = `There are no clear winner!`;
      }
    }
  } else {
    result = `There are no favorite!`;
  }

  return result;
}

console.log(favoriteColor(['red', 'red', 'yellow'])); // "red the most favorite!"
console.log(favoriteColor(['blue', 'red', 'yellow', 'blue'])); // "blue the most favorite!"
console.log(favoriteColor(['yellow', 'yellow', 'yellow'])); // "yellow the most favorite!"
console.log(favoriteColor(['red'])); // "red the most favorite!"
console.log(favoriteColor([])); // "There are no favorite!"
