const intersection = {
  'result': new Set(),
  'find': function(args){

    let setA = new Set((args[0]).split(","));
    let setB = new Set((args[1]).split(","));

    console.log(setA);
    console.log(setB);

    this.result = args;

    return this.result;
  }  
};