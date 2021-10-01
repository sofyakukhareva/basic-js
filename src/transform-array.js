
/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`)
}else{
  const resultArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]=='--double-next'&& arr[i+1] !== undefined){
      resultArr.push(arr[i+1])
    }else if(arr[i] == '--discard-next'){
      i++;
    }else if(arr[i] == '--discard-prev'){
      resultArr.pop()
    }else if(arr[i] == '--double-prev' && arr[i-1] !== undefined){
      resultArr.push(arr[i-1])
    }else{
      resultArr.push(arr[i])
    }
  }
  return resultArr;
}

}
