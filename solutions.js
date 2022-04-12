
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
