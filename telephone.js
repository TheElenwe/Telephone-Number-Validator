function telephoneCheck(str) {
  
    
    if (str.length ===10 ){
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
   
    else if (){
       return false;

    }
    
  }
  
  console.log(telephoneCheck("55 55-55-555-5"));
