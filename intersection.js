const intersection = {
  'result': new Set(),
  'find': function(args){

    let setA = new Set((args[0]).split(","));
    let setB = new Set((args[1]).split(","));

    console.log(setA);
    console.log(setB);

foreach(const element of setA){
 if(setA.contains(element)){
   this.result.push(element);
}


}

  

    return this.result;
  }  
};