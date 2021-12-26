var n = prompt("Enter a number");
 n = parseInt(n);
 var count = 0;
 for(i=2 ; i<=n/2 ; i++){
     if(n % i ==0){
        count = 1;
        break;
     }
    
     else if(n==1){
        console.log("Neither prime nor composit");
     }
     else if(count == 0){
        console.log("Prime Number");
     }
     else{
         console.log("Composit");
     }
 }