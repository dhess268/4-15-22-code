
// Changes position of a string containing a first and last name
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }


// returns Yes when true and No when false
  function boolToWord( bool ){
    return bool? "Yes":"No"
  }


// mutates a passed array and reverses the array  in place
  function swapValues() {
    //     var args = Array.prototype.slice.call(arguments);
    //     var arr = args[0];
    //     let tempArr = []
    //     tempArr[0] = arr[1];
    //     tempArr[1] = arr[0];
    //     arguments[0] = tempArr
        arguments[0].reverse()
    }

// 4-16-22-solutions


// Removes numbers from string input
    function stringClean(s){
      let arr = s.split('')
      for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i]) && arr[i] !== ' '){
          let removed = arr.splice(i, 1)
          i -= 1
        }
      }
      return arr.join('')
    }

    // interesting question i suppose that returns if the person's name begins with r
    function areYouPlayingBanjo(name) {
  
      return name[0].toLowerCase() === 'r' ? `${name} plays banjo`:`${name} does not play banjo`
    }


// returns if input is even or odd
    function even_or_odd(number) {
      return number % 2 === 0 ? 'Even' : 'Odd'
    }

    

    // Sums Numbers in an array
function sum (numbers) {
  "use strict";
  return numbers.reduce((a,b)=>a+b,0)
  
};