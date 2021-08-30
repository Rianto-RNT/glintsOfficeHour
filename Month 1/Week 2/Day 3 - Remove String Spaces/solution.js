function noSpace(x){
    var newStr = [];
    x.split("").map(function(v) {
      if (v !== " ") {
        newStr.push(v);
      }
    });
    return newStr.join("");
  }

  


  // return x.replace(/\s+/g, '');

  // function noSpace(x){return x.split(' ').join('')}