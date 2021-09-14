function sumOfDifferences(arr) {
    const sorted = arr.sort((a, b) => b - a)
    let sum = 0 ;
    
    for(let i=1; i<sorted.length; i++){
      sum += sorted[i-1] - sorted[i];
      
    }
    
    return sum;
  }