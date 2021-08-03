function telephoneCheck(str) {
  
    if (str.indexOf(' ') >=0){
        return false;
    }
    else if (str.length ===10 ){
        return true;
    }else if(str.length ===14 ){
         return true;
    }
    else if(str.length <1){
        return false;
    }
    else if(str === 1){
        return true
    }
    else if(str==="-"){

    }else if(str == " "){
        return false;
    }
   
   
    
  }
  
  console.log(telephoneCheck(""));
