function telephoneCheck(str) {
  let numberCountry =1
    
    if (str.length ===10 || str.length ===12 || str.length === 13 ||str.length ===14){
        
        return true;
    }
    else if(numberCountry.length !==1){
        return true;
    }
   else if(str ==="-" || str ==="(" || str === ")"){
       return true;
   }
   
    
  }
  
  console.log(telephoneCheck("1(999)999-9999"));