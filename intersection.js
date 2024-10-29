const intersection = {
  'result': new Set(),
  'find': function(args){
    this.result = args;

    return this.result;
  }  
};